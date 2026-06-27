// Minna no Nihongo Seri 2 (2017+) — Vocab data
// Struktur per bab. Boss tinggal tambah/ubah vocab dari buku.

import type { Chapter, Vocab } from "./types";
export type { Chapter, Vocab };

// ========================================================
// BAB 1 — Perkenalan & salam dasar
// Sumber: Minna no Nihongo Seri 2, Bab 1
// (kata-kata generik/perkenalan — aman untuk ditulis)
// ========================================================
export const chapter1: Chapter = {
  slug: "bab-1",
  title: "Bab 1 — Perkenalan",
  jp_title: "第1課 はじめまして",
  description: "Salam, nama, asal, tinggal — dasar perkenalan",
  vocab: [
    // --- Pronoun & orang ---
    { id: "1-01", jp: "私", kana: "わたし", romaji: "watashi", id_meaning: "saya" },
    { id: "1-02", jp: "あなた", kana: "あなた", romaji: "anata", id_meaning: "kamu / Anda" },
    { id: "1-03", jp: "人", kana: "ひと", romaji: "hito", id_meaning: "orang" },
    { id: "1-04", jp: "日本人", kana: "にほんじん", romaji: "nihonjin", id_meaning: "orang Jepang" },
    { id: "1-05", jp: "あの ひと", kana: "あのひと", romaji: "ano hito", id_meaning: "orang itu / dia" },
    { id: "1-06", jp: "あの かた", kana: "あのかた", romaji: "ano kata", id_meaning: "beliau (bentuk sopan dari ano hito)" },
    { id: "1-07", jp: "わたしたち", kana: "わたしたち", romaji: "watashitachi", id_meaning: "kami / kita" },

    // --- Akhiran nama ---
    { id: "1-08", jp: "〜さん", kana: "〜さん", id_meaning: "Saudara / Bapak / Ibu (akhiran sopan untuk nama)", tags: ["suffix"] },
    { id: "1-09", jp: "〜ちゃん", kana: "〜ちゃん", id_meaning: "akhiran untuk nama anak-anak / orang terdekat", tags: ["suffix"] },
    { id: "1-10", jp: "〜人", kana: "〜じん", id_meaning: "orang ~ (menunjukkan kewarganegaraan)", tags: ["suffix"] },

    // --- Profesi & pekerjaan ---
    { id: "1-11", jp: "学生", kana: "がくせい", romaji: "gakusei", id_meaning: "mahasiswa / pelajar" },
    { id: "1-12", jp: "先生", kana: "せんせい", romaji: "sensei", id_meaning: "guru / dosen (tidak untuk menyebut profesi sendiri)" },
    { id: "1-13", jp: "教師", kana: "きょうし", romaji: "kyoushi", id_meaning: "guru / pengajar (profesi)" },
    { id: "1-14", jp: "会社員", kana: "かいしゃいん", romaji: "kaishain", id_meaning: "pegawai perusahaan" },
    { id: "1-15", jp: "社員", kana: "しゃいん", romaji: "shain", id_meaning: "karyawan perusahaan (dipakai dengan nama perusahaan)" },
    { id: "1-16", jp: "銀行員", kana: "ぎんこういん", romaji: "ginkouin", id_meaning: "pegawai bank" },
    { id: "1-17", jp: "医者", kana: "いしゃ", romaji: "isha", id_meaning: "dokter" },
    { id: "1-18", jp: "研究者", kana: "けんきゅうしゃ", romaji: "kenkyuusha", id_meaning: "peneliti" },

    // --- Tempat & usia ---
    { id: "1-19", jp: "大学", kana: "だいがく", romaji: "daigaku", id_meaning: "universitas" },
    { id: "1-20", jp: "病院", kana: "びょういん", romaji: "byouin", id_meaning: "rumah sakit" },
    { id: "1-21", jp: "誰", kana: "だれ", romaji: "dare", id_meaning: "siapa" },
    { id: "1-22", jp: "どなた", kana: "どなた", romaji: "donata", id_meaning: "siapa (bentuk sopan dari dare)" },
    { id: "1-23", jp: "〜歳", kana: "〜さい", id_meaning: "~ tahun (untuk umur)", tags: ["suffix", "counter"] },
    { id: "1-24", jp: "何歳", kana: "なんさい", romaji: "nansai", id_meaning: "berapa umur?" },
    { id: "1-25", jp: "おいくつ", kana: "おいくつ", romaji: "oikutsu", id_meaning: "berapa umur? (bentuk lebih sopan dari nansai)" },

    // --- Ungkapan perkenalan ---
    { id: "1-26", jp: "はい", kana: "はい", romaji: "hai", id_meaning: "ya" },
    { id: "1-27", jp: "いいえ", kana: "いいえ", romaji: "iie", id_meaning: "tidak / bukan" },
    { id: "1-28", jp: "初めまして", kana: "はじめまして", romaji: "hajimemashite", id_meaning: "perkenalkan (saat pertama kali bertemu)" },
    { id: "1-29", jp: "〜から来ました", kana: "〜からきました", id_meaning: "datang / berasal dari ~", tags: ["frasa"] },
    { id: "1-30", jp: "どうぞ よろしく お願いします", kana: "どうぞよろしくおねがいします", romaji: "douzo yoroshiku onegaishimasu", id_meaning: "senang berkenalan dengan Anda" },
    { id: "1-31", jp: "失礼ですが", kana: "しつれいですが", romaji: "shitsurei desu ga", id_meaning: "permisi (untuk bertanya hal pribadi seperti nama)" },
    { id: "1-32", jp: "お名前は？", kana: "おなまえは", romaji: "onamae wa", id_meaning: "siapa nama Anda?" },

    // --- Tambahan Minna Bab 1 (salam & identitas) ---
    { id: "1-33", jp: "友達", kana: "ともだち", romaji: "tomodachi", id_meaning: "teman" },
    { id: "1-34", jp: "名前", kana: "なまえ", romaji: "namae", id_meaning: "nama" },
    { id: "1-35", jp: "国", kana: "くに", romaji: "kuni", id_meaning: "negara" },
    { id: "1-36", jp: "日本", kana: "にほん", romaji: "nihon", id_meaning: "Jepang" },
    { id: "1-37", jp: "インドネシア", kana: "インドネシア", romaji: "Indoneshia", id_meaning: "Indonesia" },
    { id: "1-38", jp: "どうぞ", kana: "どうぞ", romaji: "douzo", id_meaning: "silakan" },
    { id: "1-39", jp: "こちらこそ", kana: "こちらこそ", id_meaning: "saya juga (balasan salam)" },
    { id: "1-40", jp: "会社", kana: "かいしゃ", romaji: "kaisha", id_meaning: "perusahaan" },
    { id: "1-41", jp: "高校", kana: "こうこう", romaji: "koukou", id_meaning: "SMA" },
  ],
};

// ========================================================
// BAB 2 — Kata tunjuk benda & kosakata sehari-hari
// Sumber: Minna no Nihongo Seri 2, Bab 2
// ========================================================
export const chapter2: Chapter = {
  slug: "bab-2",
  title: "Bab 2 — Kata Tunjuk",
  jp_title: "第2課 これ／それ／あれ",
  description: "Kata tunjuk benda (ini/itu) + benda sehari-hari",
  vocab: [
    // --- Kata tunjuk ---
    { id: "2-01", jp: "これ", kana: "これ", romaji: "kore", id_meaning: "ini (benda di dekat pembicara)" },
    { id: "2-02", jp: "それ", kana: "それ", romaji: "sore", id_meaning: "itu (benda di dekat lawan bicara)" },
    { id: "2-03", jp: "あれ", kana: "あれ", romaji: "are", id_meaning: "itu (benda jauh dari keduanya)" },
    { id: "2-04", jp: "この ～", kana: "この", romaji: "kono", id_meaning: "~ ini (diikuti kata benda, misal: kono hon)", tags: ["prefix"] },
    { id: "2-05", jp: "その ～", kana: "その", romaji: "sono", id_meaning: "~ itu (diikuti kata benda)", tags: ["prefix"] },
    { id: "2-06", jp: "あの ～", kana: "あの", romaji: "ano", id_meaning: "~ itu yang di sana (diikuti kata benda)", tags: ["prefix"] },

    // --- Benda sehari-hari & alat tulis ---
    { id: "2-07", jp: "本", kana: "ほん", romaji: "hon", id_meaning: "buku" },
    { id: "2-08", jp: "辞書", kana: "じしょ", romaji: "jisho", id_meaning: "kamus" },
    { id: "2-09", jp: "雑誌", kana: "ざっし", romaji: "zasshi", id_meaning: "majalah" },
    { id: "2-10", jp: "新聞", kana: "しんぶん", romaji: "shinbun", id_meaning: "koran" },
    { id: "2-11", jp: "ノート", kana: "ノート", romaji: "nooto", id_meaning: "buku catatan" },
    { id: "2-12", jp: "手帳", kana: "てちょう", romaji: "techou", id_meaning: "buku agenda / buku saku" },
    { id: "2-13", jp: "名刺", kana: "めいし", romaji: "meishi", id_meaning: "kartu nama" },
    { id: "2-14", jp: "カード", kana: "カード", romaji: "kaado", id_meaning: "kartu (kredit/ATM/dll)" },
    { id: "2-15", jp: "鉛筆", kana: "えんぴつ", romaji: "enpitsu", id_meaning: "pensil" },
    { id: "2-16", jp: "ボールペン", kana: "ボールペン", romaji: "boorupen", id_meaning: "pulpen" },
    { id: "2-17", jp: "シャープペンシル", kana: "シャープペンシル", romaji: "shaapu penshiru", id_meaning: "pensil mekanik" },
    { id: "2-18", jp: "鍵", kana: "かぎ", romaji: "kagi", id_meaning: "kunci" },
    { id: "2-19", jp: "時計", kana: "とけい", romaji: "tokei", id_meaning: "jam" },
    { id: "2-20", jp: "傘", kana: "かさ", romaji: "kasa", id_meaning: "payung" },
    { id: "2-21", jp: "鞄", kana: "かばん", romaji: "kaban", id_meaning: "tas" },

    // --- Elektronik & benda lain ---
    { id: "2-22", jp: "テレビ", kana: "テレビ", romaji: "terebi", id_meaning: "televisi" },
    { id: "2-23", jp: "ラジオ", kana: "ラジオ", romaji: "rajio", id_meaning: "radio" },
    { id: "2-24", jp: "カメラ", kana: "カメラ", romaji: "kamera", id_meaning: "kamera" },
    { id: "2-25", jp: "コンピューター", kana: "コンピューター", romaji: "konpyuutaa", id_meaning: "komputer" },
    { id: "2-26", jp: "自動車", kana: "じどうしゃ", romaji: "jidousha", id_meaning: "mobil" },
    { id: "2-27", jp: "机", kana: "つくえ", romaji: "tsukue", id_meaning: "meja" },
    { id: "2-28", jp: "椅子", kana: "いす", romaji: "isu", id_meaning: "kursi" },
    { id: "2-29", jp: "チョコレート", kana: "チョコレート", romaji: "chokoreeto", id_meaning: "cokelat" },
    { id: "2-30", jp: "コーヒー", kana: "コーヒー", romaji: "koohii", id_meaning: "kopi" },

    // --- Pertanyaan & ungkapan ---
    { id: "2-31", jp: "何", kana: "なん", romaji: "nan", id_meaning: "apa" },
    { id: "2-32", jp: "そう", kana: "そう", romaji: "sou", id_meaning: "begitu" },
    { id: "2-33", jp: "そうですか", kana: "そうですか", romaji: "sou desu ka", id_meaning: "oh, begitu" },
    { id: "2-34", jp: "違います", kana: "ちがいます", romaji: "chigaimasu", id_meaning: "bukan / salah" },
    { id: "2-35", jp: "あ", kana: "あ", romaji: "a", id_meaning: "ah (seruan saat menyadari sesuatu)" },
    { id: "2-36", jp: "ほんの気持ちです", kana: "ほんのきもちです", romaji: "honno kimochi desu", id_meaning: "ini sekadar perasaan saya (saat memberi hadiah kecil)" },
    { id: "2-37", jp: "どうぞ", kana: "どうぞ", romaji: "douzo", id_meaning: "silakan (saat menawarkan / memberikan sesuatu)" },
    { id: "2-38", jp: "どうも", kana: "どうも", romaji: "doumo", id_meaning: "terima kasih (singkat)" },
    { id: "2-39", jp: "どうも ありがとう ございます", kana: "どうもありがとうごいます", romaji: "doumo arigatou gozaimasu", id_meaning: "terima kasih banyak" },
    { id: "2-40", jp: "これから お世話に なります", kana: "これからおせわになります", romaji: "korekara osewa ni narimasu", id_meaning: "mulai sekarang saya akan minta bantuannya" },
    { id: "2-41", jp: "こちらこそ よろしく", kana: "こちらこそよろしく", romaji: "kochirakoso yoroshiku", id_meaning: "saya juga senang berkenalan (balasan yoroshiku)" },
  ],
};

// ========================================================
// BAB 3 — Kata tunjuk tempat, ruangan, harga
// Sumber: Minna no Nihongo Seri 2, Bab 3
// ========================================================
export const chapter3: Chapter = {
  slug: "bab-3",
  title: "Bab 3 — Tempat & Harga",
  jp_title: "第3課 ここ／そこ／あそこ",
  description: "Kata tunjuk tempat, ruangan, bertanya harga",
  vocab: [
    // --- Kata tunjuk tempat & arah ---
    { id: "3-01", jp: "ここ", kana: "ここ", romaji: "koko", id_meaning: "di sini (dekat pembicara)" },
    { id: "3-02", jp: "そこ", kana: "そこ", romaji: "soko", id_meaning: "di situ (dekat lawan bicara)" },
    { id: "3-03", jp: "あそこ", kana: "あそこ", romaji: "asoko", id_meaning: "di sana (jauh dari keduanya)" },
    { id: "3-04", jp: "どこ", kana: "どこ", romaji: "doko", id_meaning: "di mana" },
    { id: "3-05", jp: "こちら", kana: "こちら", romaji: "kochira", id_meaning: "sebelah sini (lebih sopan dari koko)" },
    { id: "3-06", jp: "そちら", kana: "そちら", romaji: "sochira", id_meaning: "sebelah situ (lebih sopan dari soko)" },
    { id: "3-07", jp: "あちら", kana: "あちら", romaji: "achira", id_meaning: "sebelah sana (lebih sopan dari asoko)" },
    { id: "3-08", jp: "どちら", kana: "どちら", romaji: "dochira", id_meaning: "sebelah mana (lebih sopan dari doko)" },

    // --- Ruangan & bangunan ---
    { id: "3-09", jp: "教室", kana: "きょうしつ", romaji: "kyoushitsu", id_meaning: "ruang kelas" },
    { id: "3-10", jp: "食堂", kana: "しょくどう", romaji: "shokudou", id_meaning: "ruang makan / kantin" },
    { id: "3-11", jp: "事務所", kana: "じむしょ", romaji: "jimusho", id_meaning: "kantor / ruang tata usaha" },
    { id: "3-12", jp: "会議室", kana: "かいぎしつ", romaji: "kaigishitsu", id_meaning: "ruang rapat" },
    { id: "3-13", jp: "受付", kana: "うけつけ", romaji: "uketsuke", id_meaning: "meja resepsionis / penerima tamu" },
    { id: "3-14", jp: "ロビー", kana: "ロビー", romaji: "robii", id_meaning: "lobi" },
    { id: "3-15", jp: "部屋", kana: "へや", romaji: "heya", id_meaning: "kamar / ruangan" },
    { id: "3-16", jp: "トイレ (お手洗い)", kana: "トイレ（おてあらい）", romaji: "toire (otearai)", id_meaning: "toilet / kamar kecil (otearai lebih sopan)" },
    { id: "3-17", jp: "階段", kana: "かいだん", romaji: "kaidan", id_meaning: "tangga" },
    { id: "3-18", jp: "エレベーター", kana: "エレベーター", romaji: "erebeetaa", id_meaning: "lift" },
    { id: "3-19", jp: "エスカレーター", kana: "エスカレーター", romaji: "esukareetaa", id_meaning: "eskalator" },

    // --- Benda & tempat lainnya ---
    { id: "3-20", jp: "国", kana: "くに", romaji: "kuni", id_meaning: "negara" },
    { id: "3-21", jp: "会社", kana: "かいしゃ", romaji: "kaisha", id_meaning: "perusahaan" },
    { id: "3-22", jp: "家", kana: "うち", romaji: "uchi / ie", id_meaning: "rumah" },
    { id: "3-23", jp: "電話", kana: "でんわ", romaji: "denwa", id_meaning: "telepon" },
    { id: "3-24", jp: "靴", kana: "くつ", romaji: "kutsu", id_meaning: "sepatu" },
    { id: "3-25", jp: "ネクタイ", kana: "ネクタイ", romaji: "nekutai", id_meaning: "dasi" },
    { id: "3-26", jp: "ワイン", kana: "ワイン", romaji: "wain", id_meaning: "wine / anggur" },
    { id: "3-27", jp: "たばこ", kana: "たばこ", romaji: "tabako", id_meaning: "rokok" },
    { id: "3-28", jp: "売り場", kana: "うりば", romaji: "uriba", id_meaning: "tempat penjualan (kantor/stan di swalayan)" },

    // --- Lantai, uang & harga ---
    { id: "3-29", jp: "地下", kana: "ちか", romaji: "chika", id_meaning: "bawah tanah / basement" },
    { id: "3-30", jp: "～階", kana: "〜かい／〜がい", id_meaning: "lantai ke-~", tags: ["suffix", "counter"] },
    { id: "3-31", jp: "何階", kana: "なんがい", romaji: "nangai", id_meaning: "lantai berapa?" },
    { id: "3-32", jp: "～円", kana: "〜えん", id_meaning: "~ yen (mata uang Jepang)", tags: ["suffix", "counter"] },
    { id: "3-33", jp: "いくら", kana: "いくら", romaji: "ikura", id_meaning: "berapa harganya?" },
    { id: "3-34", jp: "百", kana: "ひゃく", romaji: "hyaku", id_meaning: "ratus" },
    { id: "3-35", jp: "千", kana: "せん", romaji: "sen", id_meaning: "ribu" },
    { id: "3-36", jp: "万", kana: "まん", romaji: "man", id_meaning: "puluh ribu" },

    // --- Ungkapan & belanja ---
    { id: "3-37", jp: "すみません", kana: "すみません", romaji: "sumimasen", id_meaning: "permisi / maaf" },
    { id: "3-38", jp: "～で ございます", kana: "〜でございます", id_meaning: "bentuk sangat sopan dari desu", tags: ["frasa"] },
    { id: "3-39", jp: "～を 見せて ください", kana: "〜をみせてください", romaji: "~o misete kudasai", id_meaning: "tolong perlihatkan [~]", tags: ["frasa"] },
    { id: "3-40", jp: "じゃ", kana: "じゃ", romaji: "ja", id_meaning: "kalau begitu" },
    { id: "3-41", jp: "～を ください", kana: "〜をください", romaji: "~o kudasai", id_meaning: "tolong beri saya [~] (saat membeli)", tags: ["frasa"] },
  ],
};

// ========================================================
// BAB 4 — Waktu, hari, kata kerja
// Sumber: Minna no Nihongo Seri 2, Bab 4
// ========================================================
export const chapter4: Chapter = {
  slug: "bab-4",
  title: "Bab 4 — Waktu & Aksi",
  jp_title: "第4課 何時に 起きますか",
  description: "Jam, hari, kata kerja aktivitas sehari-hari",
  vocab: [
    // --- Waktu & jam ---
    { id: "4-01", jp: "今", kana: "いま", romaji: "ima", id_meaning: "sekarang" },
    { id: "4-02", jp: "～時", kana: "〜じ", id_meaning: "jam ~ / pukul ~", tags: ["suffix", "counter"] },
    { id: "4-03", jp: "～分", kana: "〜ふん／〜ぷん", id_meaning: "menit ~", tags: ["suffix", "counter"] },
    { id: "4-04", jp: "半", kana: "はん", romaji: "han", id_meaning: "setengah (lewat 30 menit)" },
    { id: "4-05", jp: "何時", kana: "なんじ", romaji: "nanji", id_meaning: "jam berapa?" },
    { id: "4-06", jp: "何分", kana: "なんぷん", romaji: "nanpun", id_meaning: "menit berapa?" },
    { id: "4-07", jp: "午前", kana: "ごぜん", romaji: "gozen", id_meaning: "AM (pagi, 00:00-11:59)" },
    { id: "4-08", jp: "午後", kana: "ごご", romaji: "gogo", id_meaning: "PM (siang-malam, 12:00-23:59)" },

    // --- Keterangan waktu (hari) ---
    { id: "4-09", jp: "朝", kana: "あさ", romaji: "asa", id_meaning: "pagi" },
    { id: "4-10", jp: "昼", kana: "ひる", romaji: "hiru", id_meaning: "siang" },
    { id: "4-11", jp: "晩 / 夜", kana: "ばん / よる", romaji: "ban / yoru", id_meaning: "malam" },
    { id: "4-12", jp: "おととい", kana: "おととい", romaji: "ototoi", id_meaning: "kemarin lusa" },
    { id: "4-13", jp: "昨日", kana: "きのう", romaji: "kinou", id_meaning: "kemarin" },
    { id: "4-14", jp: "今日", kana: "きょう", romaji: "kyou", id_meaning: "hari ini" },
    { id: "4-15", jp: "明日", kana: "あした", romaji: "ashita", id_meaning: "besok" },
    { id: "4-16", jp: "あさって", kana: "あさって", romaji: "asatte", id_meaning: "besok lusa" },
    { id: "4-17", jp: "今朝", kana: "けさ", romaji: "kesa", id_meaning: "pagi ini" },
    { id: "4-18", jp: "今晩", kana: "こんばん", romaji: "konban", id_meaning: "malam ini / nanti malam" },

    // --- Nama hari ---
    { id: "4-19", jp: "月曜日", kana: "げつようび", romaji: "getsuyoubi", id_meaning: "Senin" },
    { id: "4-20", jp: "火曜日", kana: "かようび", romaji: "kayoubi", id_meaning: "Selasa" },
    { id: "4-21", jp: "水曜日", kana: "すいようび", romaji: "suiyoubi", id_meaning: "Rabu" },
    { id: "4-22", jp: "木曜日", kana: "もくようび", romaji: "mokuyoubi", id_meaning: "Kamis" },
    { id: "4-23", jp: "金曜日", kana: "きんようび", romaji: "kinyoubi", id_meaning: "Jumat" },
    { id: "4-24", jp: "土曜日", kana: "どようび", romaji: "doyoubi", id_meaning: "Sabtu" },
    { id: "4-25", jp: "日曜日", kana: "にちようび", romaji: "nichiyoubi", id_meaning: "Minggu" },
    { id: "4-26", jp: "何曜日", kana: "なんようび", romaji: "nanyoubi", id_meaning: "hari apa?" },

    // --- Kata kerja (aktivitas sehari-hari) ---
    { id: "4-27", jp: "起きます", kana: "おきます", romaji: "okimasu", id_meaning: "bangun (tidur)" },
    { id: "4-28", jp: "寝ます", kana: "ねます", romaji: "nemasu", id_meaning: "tidur" },
    { id: "4-29", jp: "働きます", kana: "はたらきます", romaji: "hatarakimasu", id_meaning: "bekerja" },
    { id: "4-30", jp: "休みます", kana: "やすみます", romaji: "yasumimasu", id_meaning: "beristirahat / mengambil libur" },
    { id: "4-31", jp: "勉強します", kana: "べんきょうします", romaji: "benkyoushimasu", id_meaning: "belajar" },
    { id: "4-32", jp: "終わります", kana: "おわります", romaji: "owarimasu", id_meaning: "selesai / berakhir" },

    // --- Kata benda & partikel waktu ---
    { id: "4-33", jp: "休み", kana: "やすみ", romaji: "yasumi", id_meaning: "istirahat / libur / cuti" },
    { id: "4-34", jp: "昼休み", kana: "ひるやすみ", romaji: "hiruyasumi", id_meaning: "istirahat siang" },
    { id: "4-35", jp: "試験", kana: "しけん", romaji: "shiken", id_meaning: "ujian" },
    { id: "4-36", jp: "会議", kana: "かいぎ", romaji: "kaigi", id_meaning: "rapat" },
    { id: "4-37", jp: "映画", kana: "えいが", romaji: "eiga", id_meaning: "film" },
    { id: "4-38", jp: "番号", kana: "ばんごう", romaji: "bangou", id_meaning: "nomor" },
    { id: "4-39", jp: "何番", kana: "なんばん", romaji: "nanban", id_meaning: "nomor berapa?" },
    { id: "4-40", jp: "～から", kana: "〜から", id_meaning: "dari ~ (waktu/tempat)", tags: ["partikel"] },
    { id: "4-41", jp: "～まで", kana: "〜まで", id_meaning: "sampai ~ (waktu/tempat)", tags: ["partikel"] },
    { id: "4-42", jp: "～と～", kana: "〜と〜", id_meaning: "dan (penghubung dua kata benda)", tags: ["partikel"] },

    // --- Ungkapan ---
    { id: "4-43", jp: "大変ですね", kana: "たいへんですね", romaji: "taihen desu ne", id_meaning: "wah, pasti berat ya (simpati)" },
    { id: "4-44", jp: "そちら", kana: "そちら", romaji: "sochira", id_meaning: "tempat Anda (konteks: perusahaan/tempat lawan bicara)" },
    { id: "4-45", jp: "えーと", kana: "えーと", romaji: "eeto", id_meaning: "mmm... / anu... (jeda saat berpikir)" },
  ],
};

// ========================================================
// BAB 5-25 — Tambahan vocab Minna no Nihongo Seri 2
// Source: parsed from Boss's kotoba.txt (recovered from broken JSON)
// ========================================================

export const chapter5: Chapter = {
  slug: "bab-5",
  title: "Bab 5 — Transportasi",
  jp_title: "第5課 毎日",
  description: "Transportasi & perjalanan",
  vocab: [
    { id: "5-01", jp: "行く", kana: "いく", id_meaning: "pergi" },
    { id: "5-02", jp: "来る", kana: "くる", id_meaning: "datang" },
    { id: "5-03", jp: "学校", kana: "がっこう", id_meaning: "sekolah" },
    { id: "5-04", jp: "公園", kana: "こうえん", id_meaning: "taman" },
    { id: "5-05", jp: "駅", kana: "えき", id_meaning: "stasiun" },
    { id: "5-06", jp: "飛行機", kana: "ひこうき", id_meaning: "pesawat" },
    { id: "5-07", jp: "船", kana: "ふね", id_meaning: "kapal" },
    { id: "5-08", jp: "電車", kana: "でんしゃ", id_meaning: "kereta api" },
    { id: "5-09", jp: "地下鉄", kana: "ちかてつ", id_meaning: "kereta bawah tanah" },
    { id: "5-10", jp: "新幹線", kana: "しんかんせん", id_meaning: "kereta cepat" },
    { id: "5-11", jp: "バス", kana: "バス", id_meaning: "bus" },
    { id: "5-12", jp: "タクシー", kana: "タクシー", id_meaning: "taksi" },
    { id: "5-13", jp: "自転車", kana: "じてんしゃ", id_meaning: "sepeda" },
    { id: "5-14", jp: "歩いて", kana: "あるいて", id_meaning: "jalan kaki" },
    { id: "5-15", jp: "友達", kana: "ともだち", id_meaning: "teman" },
    { id: "5-16", jp: "一緒に", kana: "いっしょに", id_meaning: "bersama" },
    { id: "5-17", jp: "遠い", kana: "とおい", id_meaning: "jauh" },
    { id: "5-18", jp: "近い", kana: "ちかい", id_meaning: "dekat" },
    { id: "5-19", jp: "早い", kana: "はやい", id_meaning: "cepat/pagi" },
    { id: "5-20", jp: "遅い", kana: "おそい", id_meaning: "lambat/malam" },
    { id: "5-21", jp: "毎日", kana: "まいにち", id_meaning: "setiap hari" },
    { id: "5-22", jp: "全然", kana: "ぜんぜん", id_meaning: "sama sekali (negatif)" },
  ],
};

export const chapter6: Chapter = {
  slug: "bab-6",
  title: "Bab 6 — Hari & Aktivitas",
  jp_title: "第6課 週末",
  description: "Hari, waktu, aktivitas harian",
  vocab: [
    { id: "6-01", jp: "起きる", kana: "おきる", id_meaning: "bangun tidur" },
    { id: "6-02", jp: "寝る", kana: "ねる", id_meaning: "tidur" },
    { id: "6-03", jp: "働く", kana: "はたらく", id_meaning: "bekerja" },
    { id: "6-04", jp: "休む", kana: "やすむ", id_meaning: "istirahat" },
    { id: "6-05", jp: "会社", kana: "かいしゃ", id_meaning: "perusahaan" },
    { id: "6-06", jp: "家", kana: "いえ", id_meaning: "rumah" },
    { id: "6-07", jp: "朝", kana: "あさ", id_meaning: "pagi" },
    { id: "6-08", jp: "夜", kana: "よる", id_meaning: "malam" },
    { id: "6-09", jp: "午前", kana: "ごぜん", id_meaning: "pagi hari (AM)" },
    { id: "6-10", jp: "午後", kana: "ごご", id_meaning: "sore hari (PM)" },
    { id: "6-11", jp: "休み", kana: "やすみ", id_meaning: "libur" },
    { id: "6-12", jp: "月曜日", kana: "げつようび", id_meaning: "Senin" },
    { id: "6-13", jp: "火曜日", kana: "かようび", id_meaning: "Selasa" },
    { id: "6-14", jp: "水曜日", kana: "すいようび", id_meaning: "Rabu" },
    { id: "6-15", jp: "木曜日", kana: "もくようび", id_meaning: "Kamis" },
    { id: "6-16", jp: "土曜日", kana: "どようび", id_meaning: "Sabtu" },
    { id: "6-17", jp: "日曜日", kana: "にちようび", id_meaning: "Minggu" },
    { id: "6-18", jp: "今夜", kana: "こんや", id_meaning: "malam ini" },
  ],
};

export const chapter7: Chapter = {
  slug: "bab-7",
  title: "Bab 7 — Memberi & Menerima",
  jp_title: "第7課 私",
  description: "Memberi, menerima, posisi",
  vocab: [
    { id: "7-01", jp: "切る", kana: "きる", id_meaning: "memotong" },
    { id: "7-02", jp: "教える", kana: "おしえる", id_meaning: "mengajarkan" },
    { id: "7-03", jp: "習う", kana: "ならう", id_meaning: "belajar dari orang" },
    { id: "7-04", jp: "練習", kana: "れんしゅう", id_meaning: "latihan" },
    { id: "7-05", jp: "手紙", kana: "てがみ", id_meaning: "surat" },
    { id: "7-06", jp: "横", kana: "よこ", id_meaning: "samping" },
    { id: "7-07", jp: "左", kana: "ひだり", id_meaning: "kiri" },
    { id: "7-08", jp: "前", kana: "まえ", id_meaning: "depan" },
    { id: "7-09", jp: "隣", kana: "となり", id_meaning: "sebelah" },
    { id: "7-10", jp: "中", kana: "なか", id_meaning: "di dalam" },
    { id: "7-11", jp: "上", kana: "うえ", id_meaning: ": 7," },
    { id: "7-12", jp: "箱", kana: "はこ", id_meaning: "kotak" },
    { id: "7-13", jp: "問題", kana: "もんだい", id_meaning: "soal/masalah" },
  ],
};

export const chapter8: Chapter = {
  slug: "bab-8",
  title: "Bab 8 — Sifat & Cuaca",
  jp_title: "第8課 趣味",
  description: "Sifat, perasaan, cuaca",
  vocab: [
    { id: "8-01", jp: "上手", kana: "じょうず", id_meaning: "pintar" },
    { id: "8-02", jp: "下手", kana: "へた", id_meaning: "tidak pintar" },
    { id: "8-03", jp: "好き", kana: "すき", id_meaning: "suka" },
    { id: "8-04", jp: "暑い", kana: "あつい", id_meaning: "panas (cuaca)" },
    { id: "8-05", jp: "寒い", kana: "さむい", id_meaning: "dingin (cuaca)" },
    { id: "8-06", jp: "狭い", kana: "せまい", id_meaning: "sempit" },
    { id: "8-07", jp: "重い", kana: "おもい", id_meaning: "berat" },
    { id: "8-08", jp: "忙しい", kana: "いそがしい", id_meaning: "sibuk" },
    { id: "8-09", jp: "悪い", kana: "わるい", id_meaning: "jelek" },
    { id: "8-10", jp: "犬", kana: "いぬ", id_meaning: "anjing" },
    { id: "8-11", jp: "猫", kana: "ねこ", id_meaning: "kucing" },
    { id: "8-12", jp: "天気", kana: "てんき", id_meaning: "cuaca" },
    { id: "8-13", jp: "写真", kana: "しゃしん", id_meaning: "foto" },
    { id: "8-14", jp: "甘い", kana: "あまい", id_meaning: "manis" },
    { id: "8-15", jp: "辛い", kana: "からい", id_meaning: "pedas" },
    { id: "8-16", jp: "美味しい", kana: "おいしい", id_meaning: "enak" },
  ],
};

export const chapter9: Chapter = {
  slug: "bab-9",
  title: "Bab 9 — Keadaan & Sifat",
  jp_title: "第9課 私の家族",
  description: "Sifat i-adjective",
  vocab: [
    { id: "9-01", jp: "悲しい", kana: "かなしい", id_meaning: "sed," },
    { id: "9-02", jp: "便利", kana: "べんり", id_meaning: "praktis" },
    { id: "9-03", jp: "不便", kana: "ふべん", id_meaning: "tidak praktis" },
    { id: "9-04", jp: "元気", kana: "げんき", id_meaning: "sehat/semangat" },
    { id: "9-05", jp: "静か", kana: "しずか", id_meaning: "sepi/hening" },
    { id: "9-06", jp: "にぎやか", kana: "にぎやか", id_meaning: "ramai" },
    { id: "9-07", jp: "有名", kana: "ゆうめい", id_meaning: "terkenal" },
    { id: "9-08", jp: "暇", kana: "ひま", id_meaning: "waktu luang" },
    { id: "9-09", jp: "簡単", kana: "かんたん", id_meaning: "mudah/sederhana" },
    { id: "9-10", jp: "難しい", kana: "むずかしい", id_meaning: "sulit" },
    { id: "9-11", jp: "易しい", kana: "やさしい", id_meaning: "mudah" },
    { id: "9-12", jp: "高い", kana: "たかい", id_meaning: "mahal/tinggi" },
    { id: "9-13", jp: "安い", kana: "やすい", id_meaning: "murah" },
    { id: "9-14", jp: "若い", kana: "わかい", id_meaning: "muda" },
    { id: "9-15", jp: "古い", kana: "ふるい", id_meaning: "tua (benda)" },
    { id: "9-16", jp: "新しい", kana: "あたらしい", id_meaning: "baru" },
    { id: "9-17", jp: "きれい", kana: "きれい", id_meaning: "cantik/bersih" },
  ],
};

export const chapter10: Chapter = {
  slug: "bab-10",
  title: "Bab 10 — Tempat & Lokasi",
  jp_title: "第10課 京都",
  description: "Lokasi, tempat umum",
  vocab: [
    { id: "10-01", jp: "いる", kana: "いる", id_meaning: "ada (orang/hewan)" },
    { id: "10-02", jp: "わかる", kana: "わかる", id_meaning: "mengerti" },
    { id: "10-03", jp: "屋上", kana: "おくじょう", id_meaning: "atap" },
    { id: "10-04", jp: "売店", kana: "ばいてん", id_meaning: "toko kecil" },
    { id: "10-05", jp: "靴", kana: "くつ", id_meaning: "sepatu" },
    { id: "10-06", jp: "シャツ", kana: "シャツ", id_meaning: "kemeja" },
    { id: "10-07", jp: "人", kana: "ひと", id_meaning: "orang" },
    { id: "10-08", jp: "私", kana: "わたし", id_meaning: "saya" },
    { id: "10-09", jp: "友達", kana: "ともだち", id_meaning: "teman" },
    { id: "10-10", jp: "誰", kana: "だれ", id_meaning: "siapa" },
    { id: "10-11", jp: "どこ", kana: "どこ", id_meaning: "mana" },
    { id: "10-12", jp: "国", kana: "くに", id_meaning: "negara" },
    { id: "10-13", jp: "大学", kana: "だいがく", id_meaning: "universitas" },
    { id: "10-14", jp: "病院", kana: "びょういん", id_meaning: "rumah sakit" },
    { id: "10-15", jp: "教室", kana: "きょうしつ", id_meaning: "ruang kelas" },
    { id: "10-16", jp: "町", kana: "まち", id_meaning: "kota" },
    { id: "10-17", jp: "建物", kana: "たてもの", id_meaning: "gedung" },
    { id: "10-18", jp: "場所", kana: "ばしょ", id_meaning: "tempat" },
  ],
};

export const chapter11: Chapter = {
  slug: "bab-11",
  title: "Bab 11 — Waktu & Frekuensi",
  jp_title: "第11課 時間に余裕",
  description: "Waktu, frekuensi, kemampuan",
  vocab: [
    { id: "11-01", jp: "分かる", kana: "わかる", id_meaning: "mengerti" },
    { id: "11-02", jp: "できる", kana: "できる", id_meaning: "bisa (kemampuan)" },
    { id: "11-03", jp: "泳ぐ", kana: "およぐ", id_meaning: "berenang" },
    { id: "11-04", jp: "思う", kana: "おもう", id_meaning: "berpikir/mengira" },
    { id: "11-05", jp: "時間", kana: "じかん", id_meaning: "waktu" },
    { id: "11-06", jp: "何時間", kana: "なんじかん", id_meaning: "berapa jam" },
    { id: "11-07", jp: "何分", kana: "なんぷん", id_meaning: "berapa menit" },
    { id: "11-08", jp: "週末", kana: "しゅうまつ", id_meaning: "akhir pekan" },
    { id: "11-09", jp: "全然", kana: "ぜんぜん", id_meaning: "sama sekali (negatif)" },
    { id: "11-10", jp: "少しだけ", kana: "すこしだけ", id_meaning: "sedikit saja" },
    { id: "11-11", jp: "上手に", kana: "じょうずに", id_meaning: "dengan pintar" },
    { id: "11-12", jp: "下手上手に", kana: "へたに", id_meaning: "dengan tidak pintar" },
    { id: "11-13", jp: "プロ", kana: "プロ", id_meaning: "profesional" },
    { id: "11-14", jp: "サラリーマン", kana: "サラリーマン", id_meaning: "karyawan" },
    { id: "11-15", jp: "日本人", kana: "にほんじん", id_meaning: "orang Jepang" },
  ],
};

export const chapter12: Chapter = {
  slug: "bab-12",
  title: "Bab 12 — Cuaca & Warna",
  jp_title: "第12課 日本の季節",
  description: "Cuaca, warna, makanan",
  vocab: [
    { id: "12-01", jp: "売る", kana: "うる", id_meaning: "menjual" },
    { id: "12-02", jp: "知る", kana: "しる", id_meaning: "mengetahui" },
    { id: "12-03", jp: "住む", kana: "すむ", id_meaning: "tinggal" },
    { id: "12-04", jp: "ある", kana: "ある", id_meaning: "ada (benda)" },
    { id: "12-05", jp: "暗い", kana: "くらい", id_meaning: "gelap" },
    { id: "12-06", jp: "多い", kana: "おおい", id_meaning: "banyak" },
    { id: "12-07", jp: "赤い", kana: "あかい", id_meaning: "merah" },
    { id: "12-08", jp: "青い", kana: "あおい", id_meaning: "biru" },
    { id: "12-09", jp: "黒い", kana: "くろい", id_meaning: "hitam" },
    { id: "12-10", jp: "白い", kana: "しろい", id_meaning: "putih" },
    { id: "12-11", jp: "色", kana: "いろ", id_meaning: "warna" },
    { id: "12-12", jp: "果物", kana: "くだもの", id_meaning: "buah-buahan" },
    { id: "12-13", jp: "りんご", kana: "りんご", id_meaning: "apel" },
    { id: "12-14", jp: "野菜", kana: "やさい", id_meaning: "sayur-sayuran" },
    { id: "12-15", jp: "肉", kana: "にく", id_meaning: "daging" },
    { id: "12-16", jp: "魚", kana: "さかな", id_meaning: "ikan" },
    { id: "12-17", jp: "病気", kana: "びょうき", id_meaning: "sakit (penyakit)" },
  ],
};

export const chapter13: Chapter = {
  slug: "bab-13",
  title: "Bab 13 — Benda Sehari-hari",
  jp_title: "第13課 趣味",
  description: "Benda, alat, stationery",
  vocab: [
    { id: "13-01", jp: "買う", kana: "かう", id_meaning: "membeli" },
    { id: "13-02", jp: "書く", kana: "かく", id_meaning: "menulis" },
    { id: "13-03", jp: "撮る", kana: "とる", id_meaning: "mengambil (foto)" },
    { id: "13-04", jp: "貸す", kana: "かす", id_meaning: "meminjamkan" },
    { id: "13-05", jp: "借りる", kana: "かりる", id_meaning: "meminjam" },
    { id: "13-06", jp: "教える", kana: "おしえる", id_meaning: "mengajarkan" },
    { id: "13-07", jp: "習う", kana: "ならう", id_meaning: "belajar (dari orang)" },
    { id: "13-08", jp: "電話", kana: "でんわ", id_meaning: "telepon" },
    { id: "13-09", jp: "消しゴム", kana: "けしゴム", id_meaning: "penghapus" },
    { id: "13-10", jp: "鉛筆", kana: "えんぴつ", id_meaning: "pensil" },
    { id: "13-11", jp: "辞書", kana: "じしょ", id_meaning: "kamus" },
    { id: "13-12", jp: "地図", kana: "ちず", id_meaning: "peta" },
    { id: "13-13", jp: "カメラ", kana: "カメラ", id_meaning: "kamera" },
    { id: "13-14", jp: "テレビ", kana: "テレビ", id_meaning: "televisi" },
    { id: "13-15", jp: "パソコン", kana: "パソコン", id_meaning: "komputer" },
    { id: "13-16", jp: "万年筆", kana: "まんねんひつ", id_meaning: "pena" },
    { id: "13-17", jp: "ノート", kana: "ノート", id_meaning: "buku catatan" },
  ],
};

export const chapter14: Chapter = {
  slug: "bab-14",
  title: "Bab 14 — Kata Kerja U-ichi",
  jp_title: "第14課 会社の電話",
  description: "Kata kerja u-ichi",
  vocab: [
    { id: "14-01", jp: "言う", kana: "いう", id_meaning: "mengatakan" },
    { id: "14-02", jp: "使う", kana: "つかう", id_meaning: "menggunakan" },
    { id: "14-03", jp: "持つ", kana: "もつ", id_meaning: "memegang/memiliki" },
    { id: "14-04", jp: "手伝う", kana: "てつだう", id_meaning: "membantu" },
    { id: "14-05", jp: "知る", kana: "しる", id_meaning: "mengetahui" },
    { id: "14-06", jp: "飲む", kana: "のむ", id_meaning: "minum" },
    { id: "14-07", jp: "食べる", kana: "たべる", id_meaning: "makan" },
    { id: "14-08", jp: "作る", kana: "つくる", id_meaning: "membuat" },
    { id: "14-09", jp: "洗う", kana: "あらう", id_meaning: "mencuci" },
    { id: "14-10", jp: "泳ぐ", kana: "およぐ", id_meaning: "berenang" },
    { id: "14-11", jp: "売る", kana: "うる", id_meaning: "menjual" },
    { id: "14-12", jp: "撮る", kana: "とる", id_meaning: "mengambil foto" },
    { id: "14-13", jp: "立つ", kana: "たつ", id_meaning: "berdiri" },
    { id: "14-14", jp: "座る", kana: "すわる", id_meaning: "duduk" },
    { id: "14-15", jp: "入る", kana: "はいる", id_meaning: "masuk" },
    { id: "14-16", jp: "辞める", kana: "やめる", id_meaning: "berhenti (pekerjaan)" },
    { id: "14-17", jp: "行う", kana: "おこなう", id_meaning: "melaksanakan" },
  ],
};

export const chapter15: Chapter = {
  slug: "bab-15",
  title: "Bab 15 — Kata Kerja & Pemberian",
  jp_title: "第15課 病気",
  description: "Kata kerja ru + memberi",
  vocab: [
    { id: "15-01", jp: "貸す", kana: "かす", id_meaning: "meminjamkan" },
    { id: "15-02", jp: "借りる", kana: "かりる", id_meaning: "meminjam" },
    { id: "15-03", jp: "あげる", kana: "あげる", id_meaning: "memberi (kepada orang lain)" },
    { id: "15-04", jp: "もらう", kana: "もらう", id_meaning: "menerima" },
    { id: "15-05", jp: "返す", kana: "かえす", id_meaning: "mengembalikan" },
    { id: "15-06", jp: "盗む", kana: "ぬすむ", id_meaning: "mencuri" },
    { id: "15-07", jp: "書く", kana: "かく", id_meaning: "menulis" },
    { id: "15-08", jp: "読む", kana: "よむ", id_meaning: "membaca" },
    { id: "15-09", jp: "聞く", kana: "きく", id_meaning: "mendengar" },
    { id: "15-10", jp: "話す", kana: "はなす", id_meaning: "berbicara" },
    { id: "15-11", jp: "教える", kana: "おしえる", id_meaning: "mengajarkan" },
    { id: "15-12", jp: "止める", kana: "とめる", id_meaning: "memberhentikan" },
    { id: "15-13", jp: "消す", kana: "けす", id_meaning: "mematikan" },
    { id: "15-14", jp: "つける", kana: "つける", id_meaning: "menyalakan" },
    { id: "15-15", jp: "開ける", kana: "あける", id_meaning: "membuka" },
    { id: "15-16", jp: "閉める", kana: "しめる", id_meaning: "menutup" },
    { id: "15-17", jp: "急ぐ", kana: "いそぐ", id_meaning: "terburu-buru" },
    { id: "15-18", jp: "待つ", kana: "まつ", id_meaning: "menunggu" },
  ],
};

export const chapter16: Chapter = {
  slug: "bab-16",
  title: "Bab 16 — Sifat Na-adjective",
  jp_title: "第16課 私の国",
  description: "Sifat na-adjective",
  vocab: [
    { id: "16-01", jp: "上手", kana: "じょうず", id_meaning: "pintar" },
    { id: "16-02", jp: "下手", kana: "へた", id_meaning: "tidak pintar" },
    { id: "16-03", jp: "遅い", kana: "おそい", id_meaning: "lambat" },
    { id: "16-04", jp: "広い", kana: "ひろい", id_meaning: "luas" },
    { id: "16-05", jp: "狭い", kana: "せまい", id_meaning: "sempit" },
    { id: "16-06", jp: "明るい", kana: "あかるい", id_meaning: "terang" },
    { id: "16-07", jp: "暗い", kana: "くらい", id_meaning: "gelap" },
    { id: "16-08", jp: "易しい", kana: "やさしい", id_meaning: "mudah" },
    { id: "16-09", jp: "難しい", kana: "むずかしい", id_meaning: "sulit" },
    { id: "16-10", jp: "大きい", kana: "おおきい", id_meaning: "besar" },
    { id: "16-11", jp: "小さい", kana: "ちいさい", id_meaning: "kecil" },
    { id: "16-12", jp: "新しい", kana: "あたらしい", id_meaning: "baru" },
    { id: "16-13", jp: "古い", kana: "ふるい", id_meaning: "lama/tua (benda)" },
    { id: "16-14", jp: "長い", kana: "ながい", id_meaning: "panjang" },
    { id: "16-15", jp: "短い", kana: "みじかい", id_meaning: "pendek" },
    { id: "16-16", jp: "重い", kana: "おもい", id_meaning: "berat" },
    { id: "16-17", jp: "軽い", kana: "かるい", id_meaning: "ringan" },
  ],
};

export const chapter17: Chapter = {
  slug: "bab-17",
  title: "Bab 17 — Rumah & Lingkungan",
  jp_title: "第17課 私の町",
  description: "Rumah, sampah,报纸",
  vocab: [
    { id: "17-01", jp: "忘れる", kana: "わすれる", id_meaning: "lupa" },
    { id: "17-02", jp: "洗う", kana: "あらう", id_meaning: "mencuci" },
    { id: "17-03", jp: "落とす", kana: "おとす", id_meaning: "menjatuhkan" },
    { id: "17-04", jp: "出す", kana: "だす", id_meaning: "mengeluarkan" },
    { id: "17-05", jp: "掃除", kana: "そうじ", id_meaning: "membersihkan" },
    { id: "17-06", jp: "洗濯", kana: "せんたく", id_meaning: "mencuci pakaian" },
    { id: "17-07", jp: "換気", kana: "かんき", id_meaning: "ventilasi" },
    { id: "17-08", jp: "ゴミ", kana: "ゴミ", id_meaning: "sampah" },
    { id: "17-09", jp: "箱", kana: "はこ", id_meaning: "kotak" },
    { id: "17-10", jp: "分別", kana: "ぶんべつ", id_meaning: "memilah" },
    { id: "17-11", jp: "燃える", kana: "もえる", id_meaning: "terbakar" },
    { id: "17-12", jp: "燃えない", kana: "もえない", id_meaning: "tidak terbakar" },
    { id: "17-13", jp: "新聞", kana: "しんぶん", id_meaning: "koran" },
    { id: "17-14", jp: "雑誌", kana: "ざっし", id_meaning: "majalah" },
    { id: "17-15", jp: "説明", kana: "せつめい", id_meaning: "penjelasan" },
    { id: "17-16", jp: "豚", kana: "ぶた", id_meaning: "babi" },
    { id: "17-17", jp: "牛肉", kana: "ぎゅうにく", id_meaning: "daging sapi" },
  ],
};

export const chapter18: Chapter = {
  slug: "bab-18",
  title: "Bab 18 — Ruangan & Hunian",
  jp_title: "第18課 私の部屋",
  description: "Ruangan, tatami, dinding",
  vocab: [
    { id: "18-01", jp: "できる", kana: "できる", id_meaning: "bisa (kemampuan)" },
    { id: "18-02", jp: "込む", kana: "こむ", id_meaning: "ramai/padat" },
    { id: "18-03", jp: "すくむ", kana: "すくむ", id_meaning: "menyusut/mengkerut" },
    { id: "18-04", jp: "趣味", kana: "しゅみ", id_meaning: "hobi" },
    { id: "18-05", jp: "世話", kana: "せわ", id_meaning: "merawat" },
    { id: "18-06", jp: "畳", kana: "たたみ", id_meaning: "tatami" },
    { id: "18-07", jp: "和室", kana: "わしつ", id_meaning: "ruang bergaya Jepang" },
    { id: "18-08", jp: "洋室", kana: "ようしつ", id_meaning: "ruang bergaya Barat" },
    { id: "18-09", jp: "建物", kana: "たてもの", id_meaning: "gedung" },
    { id: "18-10", jp: "庭", kana: "にわ", id_meaning: "halaman/taman" },
    { id: "18-11", jp: "色", kana: "いろ", id_meaning: "warna" },
    { id: "18-12", jp: "壁", kana: "かべ", id_meaning: "dinding" },
    { id: "18-13", jp: "屋根", kana: "やね", id_meaning: "atap" },
    { id: "18-14", jp: "表", kana: "おもて", id_meaning: "depan" },
    { id: "18-15", jp: "近所", kana: "きんじょ", id_meaning: "tetangga sekitar" },
    { id: "18-16", jp: "町内", kana: "ちょうない", id_meaning: "lingkungan" },
    { id: "18-17", jp: "親しい", kana: "したしい", id_meaning: "akrab" },
  ],
};

export const chapter19: Chapter = {
  slug: "bab-19",
  title: "Bab 19 — Kegiatan Akhir Pekan",
  jp_title: "第19課 週末",
  description: "Aktivitas akhir pekan",
  vocab: [
    { id: "19-01", jp: "思い出す", kana: "おもいだす", id_meaning: "mengingat kembali" },
    { id: "19-02", jp: "散歩する", kana: "さんぽする", id_meaning: "jalan-jalan" },
    { id: "19-03", jp: "出す", kana: "だす", id_meaning: "mengeluarkan" },
    { id: "19-04", jp: "捨てる", kana: "すてる", id_meaning: "membuang" },
    { id: "19-05", jp: "間に合う", kana: "まにあう", id_meaning: "tepat waktu" },
    { id: "19-06", jp: "言う", kana: "いう", id_meaning: "berkata" },
    { id: "19-07", jp: "考える", kana: "かんがえる", id_meaning: "memikirkan" },
    { id: "19-08", jp: "調べる", kana: "しらべる", id_meaning: "menyelidiki/mencari tahu" },
    { id: "19-09", jp: "忘れる", kana: "わすれる", id_meaning: "lupa" },
    { id: "19-10", jp: "集める", kana: "あつめる", id_meaning: "mengumpulkan" },
    { id: "19-11", jp: "直す", kana: "なおす", id_meaning: "memperbaiki" },
    { id: "19-12", jp: "出かける", kana: "でかける", id_meaning: "pergi keluar" },
    { id: "19-13", jp: "思う", kana: "おもう", id_meaning: "berpikir/mengira" },
    { id: "19-14", jp: "カレー", kana: "カレー", id_meaning: "kari" },
    { id: "19-15", jp: "歯", kana: "は", id_meaning: "gigi" },
    { id: "19-16", jp: "医者", kana: "いしゃ", id_meaning: "dokter" },
    { id: "19-17", jp: "約束", kana: "やくそく", id_meaning: "janji" },
  ],
};

export const chapter20: Chapter = {
  slug: "bab-20",
  title: "Bab 20 — Kirim Pos & Telepon",
  jp_title: "第20課 ファックス",
  description: "Kirim surat, telepon",
  vocab: [
    { id: "20-01", jp: "届く", kana: "とどく", id_meaning: "sampai" },
    { id: "20-02", jp: "失敗", kana: "しっぱい", id_meaning: "gagal/kesalahan" },
    { id: "20-03", jp: "残念", kana: "ざんねん", id_meaning: "sayang sekali" },
    { id: "20-04", jp: "間違える", kana: "まちがえる", id_meaning: "salah" },
    { id: "20-05", jp: "伝える", kana: "つたえる", id_meaning: "menyampaikan" },
    { id: "20-06", jp: "遅れる", kana: "おくれる", id_meaning: "terlambat" },
    { id: "20-07", jp: "送る", kana: "おくる", id_meaning: "mengirim" },
    { id: "20-08", jp: "頼む", kana: "たのむ", id_meaning: "meminta tolong" },
    { id: "20-09", jp: "説明する", kana: "せつめいする", id_meaning: "menjelaskan" },
    { id: "20-10", jp: "手紙", kana: "てがみ", id_meaning: "surat" },
    { id: "20-11", jp: "小包", kana: "こづつみ", id_meaning: "paket" },
    { id: "20-12", jp: "速達", kana: "そくたつ", id_meaning: "kilat" },
    { id: "20-13", jp: "書留", kana: "かきとめ", id_meaning: "surat tercatat" },
    { id: "20-14", jp: "航空便", kana: "こうくうびん", id_meaning: "pos udara" },
    { id: "20-15", jp: "船便", kana: "ふなびん", id_meaning: "pos laut" },
    { id: "20-16", jp: "住所", kana: "じゅうしょ", id_meaning: "alamat" },
    { id: "20-17", jp: "名前", kana: "なまえ", id_meaning: "nama" },
    { id: "20-18", jp: "電話番号", kana: "でんわばんごう", id_meaning: "nomor telepon" },
  ],
};

export const chapter21: Chapter = {
  slug: "bab-21",
  title: "Bab 21 — Belajar & Ujian",
  jp_title: "第21課 試験",
  description: "Belajar, ujian, kebiasaan",
  vocab: [
    { id: "21-01", jp: "絶対", kana: "ぜったい", id_meaning: "pasti/absolut" },
    { id: "21-02", jp: "確か", kana: "たしか", id_meaning: "pasti/sungguh" },
    { id: "21-03", jp: "続ける", kana: "つづける", id_meaning: "melanjutkan" },
    { id: "21-04", jp: "復習", kana: "ふくしゅう", id_meaning: "mengulang pelajaran" },
    { id: "21-05", jp: "試験", kana: "しけん", id_meaning: "ujian" },
    { id: "21-06", jp: "合格", kana: "ごうかく", id_meaning: "lulus ujian" },
    { id: "21-07", jp: "頑張る", kana: "がんばる", id_meaning: "berusaha keras" },
    { id: "21-08", jp: "成績", kana: "せいせき", id_meaning: "nilai/hasil ujian" },
    { id: "21-09", jp: "社会", kana: "しゃかい", id_meaning: "masyarakat" },
    { id: "21-10", jp: "国", kana: "くに", id_meaning: "negara" },
    { id: "21-11", jp: "文化", kana: "ぶんか", id_meaning: "budaya" },
    { id: "21-12", jp: "生活", kana: "せいかつ", id_meaning: "kehidupan" },
    { id: "21-13", jp: "制度", kana: "せいど", id_meaning: "sistem" },
    { id: "21-14", jp: "習慣", kana: "しゅうかん", id_meaning: "kebiasaan" },
    { id: "21-15", jp: "違う", kana: "ちがう", id_meaning: "berbeda" },
    { id: "21-16", jp: "同じ", kana: "おなじ", id_meaning: "sama" },
  ],
};

export const chapter22: Chapter = {
  slug: "bab-22",
  title: "Bab 22 — Rencana & Acara",
  jp_title: "第22課 会議",
  description: "Rencana, hadir, perkenalan",
  vocab: [
    { id: "22-01", jp: "案内する", kana: "あんないする", id_meaning: "memandu/menunjukkan" },
    { id: "22-02", jp: "予定", kana: "よてい", id_meaning: "rencana/jadwal" },
    { id: "22-03", jp: "都合", kana: "つごう", id_meaning: "kesempatan/kondisi" },
    { id: "22-04", jp: "休講", kana: "きゅうこう", id_meaning: "libur kuliah" },
    { id: "22-05", jp: "欠席", kana: "けっせき", id_meaning: "tidak hadir" },
    { id: "22-06", jp: "出席", kana: "しゅっせき", id_meaning: "hadir" },
    { id: "22-07", jp: "紹介する", kana: "しょうかいする", id_meaning: "memperkenalkan" },
    { id: "22-08", jp: "話す", kana: "はなす", id_meaning: "berbicara" },
    { id: "22-09", jp: "伺う", kana: "うかがう", id_meaning: "mengunjungi/mendengar" },
    { id: "22-10", jp: "来る", kana: "くる", id_meaning: "datang" },
    { id: "22-11", jp: "約束する", kana: "やくそくする", id_meaning: "berjanji" },
    { id: "22-12", jp: "博物館", kana: "はくぶつかん", id_meaning: "museum" },
    { id: "22-13", jp: "会議", kana: "かいぎ", id_meaning: "rapat" },
    { id: "22-14", jp: "会場", kana: "かいじょう", id_meaning: "tempat acara" },
    { id: "22-15", jp: "資料", kana: "しりょう", id_meaning: "materi/dokumen" },
    { id: "22-16", jp: "選ぶ", kana: "えらぶ", id_meaning: "memilih" },
    { id: "22-17", jp: "集まる", kana: "あつまる", id_meaning: "berkumpul" },
    { id: "22-18", jp: "集める", kana: "あつめる", id_meaning: "mengumpulkan" },
  ],
};

export const chapter23: Chapter = {
  slug: "bab-23",
  title: "Bab 23 — Perasaan & Emosi",
  jp_title: "第23課 事故",
  description: "Emosi, perasaan, reaksi",
  vocab: [
    { id: "23-01", jp: "転ぶ", kana: "ころぶ", id_meaning: "jatuh terguling" },
    { id: "23-02", jp: "咲く", kana: "さく", id_meaning: "mekar" },
    { id: "23-03", jp: "おかしい", kana: "おかしい", id_meaning: "aneh/janggal" },
    { id: "23-04", jp: "びっくりする", kana: "びっくりする", id_meaning: "terkejut" },
    { id: "23-05", jp: "焦る", kana: "あせる", id_meaning: "cemas/gelisah" },
    { id: "23-06", jp: "諦める", kana: "あきらめる", id_meaning: "menyerah" },
    { id: "23-07", jp: "閉まる", kana: "しまる", id_meaning: "tertutup" },
    { id: "23-08", jp: "開く", kana: "あく", id_meaning: "terbuka" },
    { id: "23-09", jp: "疲れる", kana: "つかれる", id_meaning: "lelah" },
    { id: "23-10", jp: "よろこぶ", kana: "よろこぶ", id_meaning: "bersuka cita" },
    { id: "23-11", jp: "怒る", kana: "おこる", id_meaning: "marah" },
    { id: "23-12", jp: "褒める", kana: "ほめる", id_meaning: "memuji" },
    { id: "23-13", jp: "笑う", kana: "わらう", id_meaning: "tertawa" },
    { id: "23-14", jp: "泣く", kana: "なく", id_meaning: "menangis" },
    { id: "23-15", jp: "傘", kana: "かさ", id_meaning: "payung" },
    { id: "23-16", jp: "置く", kana: "おく", id_meaning: "meletakkan" },
  ],
};

export const chapter24: Chapter = {
  slug: "bab-24",
  title: "Bab 24 — Pemberian & Undangan",
  jp_title: "第24課 プレゼント",
  description: "Memberi, hadiah, mengundang",
  vocab: [
    { id: "24-01", jp: "くれる", kana: "くれる", id_meaning: "memberi (kepada saya)" },
    { id: "24-02", jp: "あげる", kana: "あげる", id_meaning: "memberi" },
    { id: "24-03", jp: "もらう", kana: "もらう", id_meaning: "menerima" },
    { id: "24-04", jp: "貸す", kana: "かす", id_meaning: "meminjamkan" },
    { id: "24-05", jp: "借りる", kana: "かりる", id_meaning: "meminjam" },
    { id: "24-06", jp: "教える", kana: "おしえる", id_meaning: "mengajarkan" },
    { id: "24-07", jp: "紹介する", kana: "しょうかいする", id_meaning: "memperkenalkan" },
    { id: "24-08", jp: "案内する", kana: "あんないする", id_meaning: "memandu" },
    { id: "24-09", jp: "送る", kana: "おくる", id_meaning: "mengantar" },
    { id: "24-10", jp: "持っていく", kana: "もっていく", id_meaning: "membawa pergi" },
    { id: "24-11", jp: "連れていく", kana: "つれていく", id_meaning: "mengajak pergi" },
    { id: "24-12", jp: "プレゼント", kana: "プレゼント", id_meaning: "hadiah" },
    { id: "24-13", jp: "お祝い", kana: "おいわい", id_meaning: "selamat" },
    { id: "24-14", jp: "気持ち", kana: "きもち", id_meaning: "perasaan" },
    { id: "24-15", jp: "恐れ入ります", kana: "おそれいります", id_meaning: "maaf/sungguh terima kasih" },
    { id: "24-16", jp: "別れる", kana: "わかれる", id_meaning: "berpisah" },
    { id: "24-17", jp: "誘う", kana: "さそう", id_meaning: "mengajak" },
  ],
};

export const chapter25: Chapter = {
  slug: "bab-25",
  title: "Bab 25 — Janji & Harapan",
  jp_title: "第25課 約束",
  description: "Janji, harapan, urusan",
  vocab: [
    { id: "25-01", jp: "思い出す", kana: "おもいだす", id_meaning: "mengingat kembali" },
    { id: "25-02", jp: "怒る", kana: "おこる", id_meaning: "marah" },
    { id: "25-03", jp: "文句", kana: "もんく", id_meaning: "keluhan" },
    { id: "25-04", jp: "許す", kana: "ゆるす", id_meaning: "memaafkan" },
    { id: "25-05", jp: "そろそろ", kana: "そろそろ", id_meaning: "segera (waktu)" },
    { id: "25-06", jp: "楽しみ", kana: "たのしみ", id_meaning: "harapan/hiburan" },
    { id: "25-07", jp: "気をつける", kana: "きをつける", id_meaning: "berhati-hati" },
    { id: "25-08", jp: "無理", kana: "むり", id_meaning: "tidak masuk akal/sulit" },
    { id: "25-09", jp: "遅れる", kana: "おくれる", id_meaning: "terlambat" },
    { id: "25-10", jp: "説明する", kana: "せつめいする", id_meaning: "menjelaskan" },
    { id: "25-11", jp: "呼ぶ", kana: "よぶ", id_meaning: "memanggil" },
    { id: "25-12", jp: "待つ", kana: "まつ", id_meaning: "menunggu" },
    { id: "25-13", jp: "気を使う", kana: "きをつかう", id_meaning: "memperhatikan" },
    { id: "25-14", jp: "期待", kana: "きたい", id_meaning: "harapan" },
    { id: "25-15", jp: "約束", kana: "やくそく", id_meaning: "janji" },
    { id: "25-16", jp: "用事", kana: "ようじ", id_meaning: "urusan" },
    { id: "25-17", jp: "仕事", kana: "しごと", id_meaning: "pekerjaan" },
    { id: "25-18", jp: "都合", kana: "つごう", id_meaning: "keadaan" },
  ],
};
export const allChapters: Chapter[] = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9, chapter10, chapter11, chapter12, chapter13, chapter14, chapter15, chapter16, chapter17, chapter18, chapter19, chapter20, chapter21, chapter22, chapter23, chapter24, chapter25];

export const totalVocabCount = allChapters.reduce(
  (sum, c) => sum + c.vocab.length,
  0
);
