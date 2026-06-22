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

export const allChapters: Chapter[] = [chapter1, chapter2, chapter3, chapter4];

export const totalVocabCount = allChapters.reduce(
  (sum, c) => sum + c.vocab.length,
  0
);
