import { MemoryData } from './types'
import firstTouch from '../images/firstTouch.png'
import together from '../images/together.png'
import withMySister from '../images/withMySis.png'
import beforeBoarding from '../images/beforeBoarding.png'
import withLil from '../images/withLil.png'
import family from '../images/fmily.png'
import firstHugVideo from '../images/firstHugVideo.MP4'

export const initialMemoryData: MemoryData = {
  coupleNameBn: 'প্রথম দেখা',
  coupleNameEn: 'First Meeting',
  heroHeadingBn: 'একটি জায়গা, একটি মুহূর্তে, আর আমাদের গল্পের শুরু…',
  heroHeadingEn: 'One place, one moment, and the beginning of our story…',
  reunionHeaderBn: '৭ বছরের অপেক্ষার পর…',
  reunionHeaderEn: 'After 7 years of waiting…',
  reunionImage: '../images/firstHug.png',
  reunionLocationEn: 'Shah Amanat International Airport, 2024',
  reunionTextBn:
    'দীর্ঘ ৭ বছর দূরত্বের পর, এই জায়গাতেই প্রথমবার তোমাকে নিজের কাছে পেয়েছিলাম। সেই মুহূর্তটা শুধু দেখা ছিল না — সেটা ছিল ঘরে ফেরার অনুভূতি।',
  reunionTextEn:
    "After 7 long years of distance, this was the exact place where I held you close for the very first time. That moment wasn't just a sight — it was the undeniable feeling of returning home.",
  galleryTitleBn: 'সেদিনের কিছু মুহূর্ত',
  galleryTitleEn: 'Some Moments of That Day',
  photos: [
    {
      id: '1',
      image: firstTouch,
      captionBn: 'নিঃশব্দ এক আলিঙ্গন ❤️',
      captionEn: 'A Silent Hug',
      noteBn: `এই আলিঙ্গনটা ছিল হাজারো অপেক্ষার শেষ। সাত বছরের দূরত্ব,অসংখ্য রাতের কান্না,হাজারো কল আর প্রার্থনার পর… অবশেষে তোমাকে নিজের কাছে পেয়েছিলাম। সেদিন শাহ আমানত বিমানবন্দরের ভিড়ের মাঝেআমি শুধু একজন মানুষকে জড়িয়ে ধরি নি,আমি আমার শান্তিকে খুঁজে পেয়েছিলাম।তোমার হাতের স্পর্শটা আজও ঠিক সেদিনের মতোই অনুভব করি। ❤️`,
      noteEn:
        'This hug was the end of seven years of waiting.  After countless nights, thousands of calls, and endless prayers…  I finally held the person who always felt like home  In the middle of that crowded airport,  I didn’t just hug someone I loved —  I found my peace. ❤️',
      dateStr: '12-30-2021',
    },
    {
      id: '2',
      image: together,
      captionBn: 'প্রথমবার পাশাপাশি ✨',
      captionEn: 'First Time Side by Side ✨',
      noteBn:
        '“সাত বছরের অপেক্ষার পর,এই প্রথম আমরা একই ছবিতে দাঁড়িয়েছিলাম। ফোনের স্ক্রিনের ওপারের মানুষটা, সেদিন আমার পাশেই ছিল।এই ছবিটা শুধু একটা ছবি না—এটা আমাদের অপেক্ষার জয়।” ❤️',
      noteEn:
        '“After seven long years, this was the first photo where we finally stood together.No more screens.No more distance. Just us — side by side, exactly where we always dreamed to be.” ❤️',
      dateStr: '12-30-2021',
    },
    {
      id: '3',
      image: withMySister,
      captionBn:
        'যে মুহূর্তে আমার পৃথিবী প্রথমবার আমার পরিবারের সাথে একসাথে হলো। ❤️',
      captionEn: 'The first moment my world met my home. 💐',
      noteBn:
        '৭ বছর ধরে তুমি ছিলে হেডফোনের ওপাশের একটা কণ্ঠ, স্ক্রিনের আড়ালের একটা হাসি, আর আমার নীরব দোয়াগুলোর সবচেয়ে সুন্দর অংশ। তারপর একদিন… তুমি সত্যি সত্যি আমার বোনদের পাশে দাঁড়িয়ে ছিলে, ফুল আর ভালোবাসায় ঘেরা, আর দূরত্ব তখন আর আমাদের মাঝে ছিল না।সেদিনটা শুধু একটা দেখা ছিল না। মনে হয়েছিল বহু বছরের অপেক্ষার পর ভাগ্য অবশেষে আমাদের এক করে দিয়েছে। ❤️',
      noteEn:
        'For seven years, you were just a voice through headphones, a smile behind a screen, and a prayer I carried silently in my heart. And then one day… there you were, standing beside my sisters, surrounded by flowers and love, no longer a distance away from me.That moment did not feel like a meeting.It felt like destiny finally arriving after years of waiting. ❤️',
      dateStr: '12-30-2021',
    },
    {
      id: '4',
      image: beforeBoarding,
      captionBn:
        'সবার কাছে এটা শুধু একটা ফ্লাইট ছিল… তার কাছে এটা ছিল ৭ বছরের অপেক্ষার শেষ। ❤️',
      captionEn:
        'To everyone else, it was just a flight.To her, it was the end of seven years of waiting. ✈️❤️',
      noteBn:
        'বোর্ডিংয়ের জন্য অপেক্ষা করার সময় হয়তো আশেপাশের কেউ বুঝতেই পারেনি— তার হৃদয়ের ভেতরে জমে ছিল ৭ বছরের ভালোবাসা, অপেক্ষা আর হাজারটা স্বপ্ন। ❤️ এয়ারপোর্টের প্রতিটা আলো, প্রতিটা announcement, প্রতিটা কেটে যাওয়া মিনিট… তাকে ধীরে ধীরে নিয়ে যাচ্ছিল সেই মানুষটার কাছে, যার জন্য সে এত বছর অপেক্ষা করেছে। ✨সে শুধু অন্য একটা দেশে যাচ্ছিল না… সে যাচ্ছিল আমাদের একসাথে দেখা স্বপ্নের জীবনের দিকে। ❤️ আর হয়তো সেই শান্ত হাসির আড়ালে তার মন শুধু একটাই কথা বলছিল—“অবশেষে… এতদিন পর আমি ওর কাছে যাচ্ছি।” ✨',
      noteEn:
        'While she was waiting for boarding, maybe nobody around her knew— inside her heart, she was carrying seven years of love, patience, and dreams. ❤️ Every airport light, every announcement, every passing minute… was bringing her closer to the person she waited for all those years. ✨She wasn’t just traveling to another country. She was traveling toward the life we dreamed of together.And maybe behind that quiet smile,her heart was softly saying—“Finally… after all this time, I’m going to see him.” ❤️',
      dateStr: '12-30-2021',
    },
    {
      id: '5',
      image: withLil,
      captionBn:
        'তুমি শুধু আমার ছিলে না…অনেক আগেই তুমি আমার পরিবারের সবচেয়ে প্রিয় মানুষ হয়ে গিয়েছিলে। ❤️',
      captionEn:
        'She wasn’t just mine…she had already become one of the most loved people in my family. ❤️',
      noteBn:
        'সেদিন শুধু আমি না…আমার ছোট্ট ভাগ্নে আর ভাগ্নিটাও যেন অনেক দিনের চেনা কাউকে পেয়ে গিয়েছিল। ❤️তাদের ছোট ছোট হাতের ফুল আর নিষ্পাপ হাসির মাঝে, আমি দেখছিলাম তুমি কীভাবে ধীরে ধীরে আমার পুরো পরিবারের একটা অংশ হয়ে যাচ্ছিলে। ✨আর সবচেয়ে সুন্দর ব্যাপারটা ছিল—তুমি তাদের এমনভাবে জড়িয়ে ধরেছিলে, যেন বহুদিন ধরেই তুমি তাদের আপন মানুষ। ❤️',
      noteEn:
        'That day, it wasn’t just me…even my little nephew and niece looked like they had finally found someone they already knew by heart. ❤️Between their tiny hands holding flowers and their innocent smiles,I could see you slowly becoming a part of my entire family. ✨And maybe the most beautiful thing was—the way you held them so close, as if you had already been their person for a very long time. ❤️',
      dateStr: '12-30-2021',
    },
    {
      id: '6',
      image: family,
      captionBn: 'যে মুহূর্তে তোমার জন্য অপেক্ষা করছিল আমার পুরো পরিবার ❤️',
      captionEn: 'The moment my whole family was waiting for you. ❤️',
      noteBn:
        'কিন্তু কারও মুখে বিরক্তি ছিল না। ❤️ কারণ তারা জানতো, আজ এমন একজন মানুষ আসছে, যে অনেক আগেই আমাদের পরিবারের একটা অংশ হয়ে গেছে। ✨ কেউ ফুল নিয়ে বসে ছিল, কেউ শুধু তোমাকে একবার দেখার জন্য অপেক্ষা করছিল, আর আমি দূর থেকে শুধু একটা জিনিস অনুভব করছিলাম—তুমি কখনোই শুধু আমার ছিলে না। ❤️তুমি ধীরে ধীরে এমনভাবে সবার হৃদয়ে জায়গা করে নিয়েছিলে, যেন তুমি বহু বছর ধরেই আমাদের পরিবারেরই একজন। ✨',
      noteEn:
        'Outside the airport, everyone waited for hours… yet nobody looked tired or impatient. ❤️ Because they all knew, someone truly special was finally coming home to us. ✨ Some waited with flowers, some waited just to see you once, and standing there, I realized something beautiful— you were never only mine. ❤️ Somehow, long before that day, you had already become a part of all our hearts. ✨',
      dateStr: '12-30-2021',
    },
  ],
  cinemagraphs: [
    {
      id: '1',
      image: firstHugVideo,
      titleBn: 'আগমনের প্রহর (Arrival Hour)',
      titleEn: 'Arrival Hour',
      subtitleBn: 'স্বপ্নের ল্যান্ডিং',
      subtitleEn: 'dreams landing',
      descriptionBn: '',
      descriptionEn: '.',
    },
    {
      id: '2',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAFsQBEwJKLjFxA9bK7nD73B1-rGS9suaOJ0UUOmtWvx1tQc3d5jJwdLfTynBOStIMy-8m6mCx8F0RkaK8AdNKVPPxYhW1AZFtD7VWjAMEgQPTK6-MuP7WG6UuER-43jdGcr9KBPtmp5WIh-z3FVFE8fUCwtHcgYBQMYxKrE1MkDHe0HUYUXTDDIvVKgWRi6_nBqUt_vT77HzPhD2GX01duTSONqcRKT0tCtyy0J3_S6wRAsyFDFsuNrrI2Y6Q50Jw95M3TcB8xdvI',
      titleBn: 'গাড়ি করে ফেরা (The Drive Home)',
      titleEn: 'The Drive Home',
      subtitleBn: 'সাইড মিররে বৃষ্টির রূপকথা আর আমরা পাশাপাশি',
      subtitleEn:
        'Raindrop fairytales on rearview mirrors, sitting side by side',
      descriptionBn:
        'রিয়ারভিউ মিরর জুড়ে নিয়ন লাইটগুলো নাচছিল, আর গাড়িতে বাজছিল নরম সুর। হাত দুটি শক্ত করে ধরাই ছিল সব উত্তর। অবশেষে চেনা শহরে পাশাপাশি ফেরা।',
      descriptionEn:
        'Neon glitters danced on the car window while a gentle melody played in the background. Your hand locked tightly in mine was the ultimate answer to years of distance. Finally, riding side by side.',
    },
  ],
  timelineTitleBn: 'আমাদের পথচলা',
  timelineTitleEn: 'Our Journey',
  timelineEvents: [
    {
      id: '1',
      titleBn: '৭ বছরের অপেক্ষা',
      titleEn: '7 Years of Waiting',
      descBn: 'সময়ের হিসেবে দীর্ঘ, কিন্তু হৃদয়ে ছিল প্রতি মুহূর্তের টান।',
      descEn:
        'Seemed endless in terms of calendar days, but in our hearts, the devotion never faded.',
      completed: true,
    },
    {
      id: '2',
      titleBn: 'অসংখ্য কল, মেসেজ আর স্বপ্ন',
      titleEn: 'Endless Calls, Chats, & Dreams',
      descBn: 'ডিজিটাল স্ক্রিনে কাটানো হাজারো রাত, শুধু এই দিনটির আশায়।',
      descEn:
        'Thousands of long nights spent staring at screens, fueled purely by the hope of this one day.',
      completed: true,
    },
    {
      id: '3',
      titleBn: 'শাহ আমানত আন্তর্জাতিক বিমানবন্দরে প্রথম দেখা',
      titleEn: 'First Sight at Shah Amanat Airport',
      descBn: 'ভিড়ের মাঝে শুধু তোমাকেই খুঁজে পাওয়া।',
      descEn:
        'Finding only you in the sea of eyes, waiting at the arrivals terminal.',
      completed: true,
    },
    {
      id: '4',
      titleBn: 'একটা আলিঙ্গন, যেটা সব দূরত্ব মুছে দিল',
      titleEn: 'An Embrace that Dissolved Distance',
      descBn: 'সবটুকু দুঃখ আর অপেক্ষা নিমেষেই শেষ হয়ে গেল।',
      descEn:
        'All struggles, distance, and silent tears were swept away in a single endless embrace.',
      completed: true,
    },
    {
      id: '5',
      titleBn: 'তারপর থেকে, তুমি আমার ঘর',
      titleEn: 'From Then, You Are My Home',
      descBn: 'আর কোনো বিদায় নেই, শুধু একসাথে এগিয়ে চলা।',
      descEn:
        'No more painful airport drop-offs. Only walking forward together, as one.',
      completed: true,
    },
  ],
  secretBoxTitleBn: 'তোমার জন্য একটি কথা',
  secretBoxTitleEn: 'A Sealed Sentiment For You',
  secretMessageBn:
    '“হয়তো আমি সবসময় ঠিকভাবে প্রকাশ করতে পারিনি… কিন্তু এই সম্পর্কটা এত বছর ধরে বেঁচে ছিল শুধু তোমার ভালোবাসা আর ধৈর্যের জন্য। ❤️যখন আমি ক্লান্ত হয়ে গেছি,তুমি তখনও আমাদের ভবিষ্যৎ নিয়ে স্বপ্ন দেখেছো। যখন দূরত্ব আমাকে নীরব করে দিয়েছে, তুমি তখনও প্রতিদিন একই ভালোবাসা নিয়ে আমার পাশে থেকেছো। ✨সত্যি বলতে, এই সম্পর্কটা অনেক সময় তুমি একাই বাঁচিয়ে রেখেছিলে। আর আমি সারাজীবন কৃতজ্ঞ থাকবো এজন্য… কারণ তুমি কখনো আমাদের ছেড়ে যাওনি। ❤️আজ আমরা একসাথে—শুধু ভালোবাসার কারণে না,বরং তোমার অসম্ভব রকম dedication-এর কারণে।”',
  secretMessageEn:
    '““Maybe I never expressed it perfectly… but this relationship survived for so many years because of your love, patience, and dedication. ❤️When I became tired, you still kept dreaming about our future.When distance made me silent,you still stayed beside me with the same love every single day. ✨Truthfully,there were times when you carried this relationship all by yourself.And I will always be grateful for that…because no matter how hard things became,you never gave up on us. ❤️Today we are finally together—not only because of love,but because of your unbelievable dedication to us.””',
  secretQuizQuestionBn:
    'আপনার স্মরণীয় তারিখগুলো ইনপুট করে এটি যাচাই করে দেখতে থাকুন।(mm/dd/yyyy)',
  secretQuizQuestionEn:
    'Keep trying it out by inputting your memorable dates.(mm/dd/yyyy)',
  secretQuizAnswer: '09/17/2021',
  mapTitleBn: 'যেখান থেকে আমাদের নতুন জীবন শুরু',
  mapTitleEn: 'Where Our New Journey Flowed',
  mapLocationStrBn: 'শাহ আমানত আন্তর্জাতিক বিমানবন্দর, চট্টগ্রাম, বাংলাদেশ',
  mapLocationStrEn: 'Shah Amanat International Airport, Chattogram, Bangladesh',
  coordinates: '22.2496° N, 91.8130° E',
  bottomTextBn: '“তুমি ছিলে আমার অপেক্ষা, এখন তুমি আমার ঘর।”',
  bottomTextEn: '“You were my patience, now you are my home.”',
}
