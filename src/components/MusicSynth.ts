class MusicSynth {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private activeNodes: AudioNode[] = [];
  private intervalId: any = null;

  private chords = [
    [130.81, 164.81, 196.00, 246.94], // C major 7 (C3, E3, G3, B3)
    [138.59, 174.61, 207.65, 261.63], // Db major 7 (Db3, F3, Ab3, C4)
    [110.00, 130.81, 164.81, 220.00], // A minor 7 (A2, C3, E3, A3)
    [116.54, 138.59, 174.61, 233.08], // Bb major 7 (Bb2, Db3, F3, Bb3)
  ];

  private currentChordIndex = 0;

  constructor() {
    // Lazy initialized on play to obey browser audio policies
  }

  private initContext() {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!this.ctx && AudioContextClass) {
      this.ctx = new AudioContextClass();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.initContext();
    if (!this.ctx) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.currentChordIndex = 0;
    this.playNextChord();

    // Loop through beautiful pads every 4.5 seconds
    this.intervalId = setInterval(() => {
      this.playNextChord();
    }, 4500);
  }

  private playNextChord() {
    if (!this.ctx || !this.isPlaying) return;

    const chord = this.chords[this.currentChordIndex];
    this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;

    const now = this.ctx.currentTime;
    
    // Create master dry/wet gain nodes for warmth
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.08, now + 1.5); // very soft, non-intrusive
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.2);

    // Create a sweet high resonant low-pass filter to sound warm/felt-like
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.exponentialRampToValueAtTime(280, now + 4.0);
    filter.Q.setValueAtTime(1.5, now);

    // Create a beautiful stereo delay simulation using gain routing
    const delay = this.ctx.createDelay(1.0);
    delay.delayTime.setValueAtTime(0.4, now);
    const delayGain = this.ctx.createGain();
    delayGain.gain.setValueAtTime(0.35, now);

    // Connections
    filter.connect(masterGain);
    masterGain.connect(this.ctx.destination);

    // Delay loop
    masterGain.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(masterGain); // Feedback

    // Play individual sine oscillators with minor wave shaping
    chord.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      // Soft triangle/sine blend
      osc.type = idx % 2 === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, now);
      
      // Gentle frequency detuning for a wider stereo "lush" feeling
      osc.detune.setValueAtTime((Math.random() - 0.5) * 12, now);

      oscGain.gain.setValueAtTime(0, now);
      oscGain.gain.linearRampToValueAtTime(0.25, now + 1.2 + Math.random() * 0.4);
      oscGain.gain.exponentialRampToValueAtTime(0.01, now + 3.8);

      osc.connect(oscGain);
      oscGain.connect(filter);

      osc.start(now);
      osc.stop(now + 4.5);

      this.activeNodes.push(osc, oscGain);
    });

    this.activeNodes.push(masterGain, filter, delay, delayGain);

    // Cleanup stale nodes
    setTimeout(() => {
      this.activeNodes = this.activeNodes.slice(10);
    }, 5000);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    
    this.activeNodes.forEach(node => {
      try {
        if ('stop' in node) {
          (node as any).stop();
        }
        node.disconnect();
      } catch (e) {
        // Suppress any active stop exceptions
      }
    });
    this.activeNodes = [];
  }
}

export const ambientSynth = new MusicSynth();
export default ambientSynth;
