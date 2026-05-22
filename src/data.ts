import { MemoryData } from './types'
import firstTouch from '../images/firstTouch.png'

export const initialMemoryData: MemoryData = {
  coupleNameBn: 'স্মৃতি',
  coupleNameEn: 'Smriti',
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
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAW21feso5oJQAx2BlEHASBvdsy0nT2kp8OBtml2n9SMW6CKmJbJudUQN4sNo18_lY4yMpPjxcBqqypPQQgxlNRpxmfM-a-A4K4bWgQCLKxrHAIMrSatTxbLl5MfccvYDvYmwlTxeKRQtDkfNCGMO-wOJOGva0r5R64zSDE_jt4X9JYVT49H72-dFqHVgo7KD03cpfDxtzSodZO3_QQMjH1SsCAsVa0_8Db6UcIRYbEdE63T-WMP6roCgshEJUeaZG8FLue1hN5_w4',
      captionBn: 'ফ্রেমবন্দী হাসি',
      captionEn: 'Framed Warmth',
      noteBn:
        'সিনেম্যাটিক পোলাবয়েড ফ্রেমে তোমার সেই সুন্দর হাসি, মনে হচ্ছিল ঈশ্বর যেন আমার দিকে তাকিয়ে চমৎকার হাসছেন।',
      noteEn:
        'Your pure smile captured elegantly inside this vintage frame. It felt as if heaven itself was smiling down on our persistence.',
      dateStr: '2024-11-12',
    },
    {
      id: '3',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAaJASRR6TuM5ONHec8G5xiF36zSZzjaYVtWu-I497ekQl3WPdupXUVOiyatnnfi1ysepDn1jJzja0bnXidNWR5od8XEqezwOXN0-yu4G5O4OIXRdpHe_-6JbjRudEKtIbUlp8QUgp55C5NFARlEYBpoVQ-w-cPpaFaEMbu_keSn7w0KTFBcj9yB1sGYmNwXfgYew2nUVBpRhk4zzxfiEjazeEg73y7e8n0sbb1ifH8OtfcIJbaRpoiKCDf0068q-OGQgugStIjuJs',
      captionBn: 'জানালা দিয়ে চেয়ে',
      captionEn: 'Runway Sunrise',
      noteBn:
        'বিমানবন্দরের ভেজা কাঁচের ওপারের আকাশটা সেদিন ছিল রঙিন। মেঘ কেটে তুমি নেমে আসছিলে আমার জীবনে।',
      noteEn:
        'The airport window revealed a magnificent morning sky. Through the heavy clouds, carrying my light, you finally arrived.',
      dateStr: '2024-11-12',
    },
    {
      id: '4',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBNdrpbrcMWVFW9QxNznOFCKOfEixS3Y5FvoR6ZUBezTmGgB-8bcPJmys_5buQoqnmcFDMhcoj6fuhmavrlPwM7OL0xJBLMVJCy-HNJRvbiDixhL5ODM9ILmKEonsrXZMkNvf6j4tCH-shcdjufPWlm1H19d578-UhwEfRpzb7N0MosX_YXBMMO5zH-JVG1qVPnCaOI7gKPe38-etjdPAnXKjiDkt-ow6GTVpnTFDn7EWBcGsPBrbrpWBBQ0-lcCBqETUpdZGlQ_9w',
      captionBn: 'বৃষ্টিভেজা নিওন রাত',
      captionEn: 'Rainy Neon Streets',
      noteBn:
        'একসাথে ফেরার প্রথম পথটা ছিল বৃষ্টির জলে ধোয়া, নিওন আলোর আভা ছড়ানো। সব কোলাহল পেরিয়ে কেবল আমরা দুজন।',
      noteEn:
        "Our first drive back was a mesmerizing neon ride painted by warm rain. Out of all the world's chaos, there was finally just the two of us.",
      dateStr: '2024-11-12',
    },
  ],
  cinemagraphs: [
    {
      id: '1',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC7228w30c6zpfq8ONRKRkS9tq1RU8ayG9N4_OK1OLataBmKyAH9gvRWo9NWB2VlTaJXFmZa8tbowHAcxKi0bfvsN-KoOeLAI-evFosuIqlwAlK-yNwF32Rxsa88P8PI3TuNjV8Cr0KmzAqbzIC18r6QyuPu4pA5Wyg7OqRkmouXiwH3zw4_dSsBBT5prO-F2H85-I3gpeDd0uGWqENyNrYmDDbly3z68Rp28yBbDMEiqyIdt01ld8uu1cpXfCfGT1fF6VgMf4IZaY',
      titleBn: 'আগমনের প্রহর (Arrival Hour)',
      titleEn: 'Arrival Hour',
      subtitleBn: 'ঝুম বৃষ্টিভেজা রানওয়ে ও স্বপ্নের ল্যান্ডিং',
      subtitleEn: 'A rain-drenched runway & the flight of our dreams landing',
      descriptionBn:
        'ঘড়ির কাঁটা স্লো হয়ে গিয়েছিল সেদিন। বিমানের প্রতিটি গর্জন আকাশের বুক চিরে তোমার আগমন সংবাদ দিচ্ছিল। মনে হচ্ছিল প্রতিটি বৃষ্টির ফোঁটা আনন্দের সানাই বাজাচ্ছে।',
      descriptionEn:
        'Time had nearly frozen. The quiet hum of the landing gear cutting through rain clouds announced your arrival. Each raindrop felt like a celebratory greeting on the window.',
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
    '“তুমি শুধু আমার ভালোবাসা নও, তুমি আমার অপেক্ষার সবচেয়ে সুন্দর উত্তর। আল্লাহর কাছে প্রতিদিন শুকরিয়া জানাই, কারণ এত দূরত্বের পরও তিনি আমাদের একসাথে করেছেন।”',
  secretMessageEn:
    '“You are not just my love, you are the most beautiful answer to my patience. I thank Allah every single day, because even after all this distance, He brought us back together.”',
  secretQuizQuestionBn:
    "আমাদের মিলনমেলার বিমানবন্দরের শহরটির নাম কী? (উত্তর দিতে 'Chattogram' লিখুন)",
  secretQuizQuestionEn:
    "In which city is the reunion airport located? (Enter 'Chattogram' or 'Chittagong')",
  secretQuizAnswer: 'chattogram',
  mapTitleBn: 'যেখান থেকে আমাদের নতুন জীবন শুরু',
  mapTitleEn: 'Where Our New Journey Flowed',
  mapLocationStrBn: 'শাহ আমানত আন্তর্জাতিক বিমানবন্দর, চট্টগ্রাম, বাংলাদেশ',
  mapLocationStrEn: 'Shah Amanat International Airport, Chattogram, Bangladesh',
  coordinates: '22.2496° N, 91.8130° E',
  bottomTextBn: '“তুমি ছিলে আমার অপেক্ষা, এখন তুমি আমার ঘর।”',
  bottomTextEn: '“You were my patience, now you are my home.”',
}
