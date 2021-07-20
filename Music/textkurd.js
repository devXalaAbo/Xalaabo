const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "textkurdish",
  aliases: ["textKurdish"],
  description: "Show text",
  usage: "text",
  async execute(message, args, client) {
    
    
    let replies = ["نـەمـزانـۍ ڕۆژێـــڪٮ دێـــت..لـــەپــــۆســتەکــــانم بــــاسی نەبونـــیت بــــڪـەم..","ئـەوەیی تـۆیی ئـەوێ بـەھەر بیانویەک بێ ئـەمێنێتەوە","لێم زویر مەبە ھەر تۆم ھەیە شەڕی پێ بفرۆشم","درەنگ تر دەمرن ئەوانەی کەسێک خۆشی دەوێن","ژیان زۆر سەیرە ڕۆژانێڪ لەبەر دڵ خۆشی ناخەوین ڕۆژانێڪ لەبەر دڵ تەنگی ناخەوین!","ھەموو ئەو کەسانەی حەزیان لە تەنیاییە لە ناخەوە لەگەڵ ئازیزترین کەسیان، ئەژین","وتـی چاوەکانــی تۆ ژیانـی منن ئـەی بۆ ئێستا ژیانی منت پرکردوە لە گریان؟...","خۆشمەوێیی بە سەلامەتی ھەموو ئەوانەی حەسودی بە جێگاکەت دەبەن","لەناو هەموو برینەڪانی ژیانما تۆ ئەو برینەی بەمردن لەبیر ئەچیتەوە!","تۆ خۆت نیەتی مانەوەت نەبوو بیانوو لەچی دەگری","مرۆڤ لە تەنهاییشدا تەنها نیە هەمیشە شتێک،کەسێک هەیە کە تۆ ئازار بدات(:","نەورۆزتان پیرۆز تەنهای ئێمەش مۆبارەک","تۆش ڕۆیشتی وەک ھەموو ئەوانەی قەرار وابوو قەت نەڕۆن","ھەموو شتێکی لە دەست چو دەگەڕێتەوە ڕێک ئەو کاتەی فیر بووی بێ ئەو بژی","میھرەبان بن ڕۆژێک دێ ھەرگیز یەکتری نابینەوە","من ئەھلی منەت کێشان نیم دەمێنیتەوە باشە نامێنیتەوە باشتر","کە تۆ خۆت ڕۆحی ڕەوانی ئەی ڕۆح نشین بێ من مەڕۆ","ڕووناكیەكانم كوژاندەوە ئەوەی منی ئەوێ فەرموو با خۆی لە پێش چاوما بسوتێنێ","ئێمە دەمێکە شەڕمان نەکردوە شەڕ لەسەر دڵخۆش کردنی یەکتر ئەڵێم","دەستم بگرە تەواوی بوون و نەبوونی من تۆیی","ئێمە ھەموو مان لە چیرۆکی کەسێک دا خراپ وبێ وەفاین","لێی گەڕێ باشەو درێژ بێ خۆری ئێمە قەت ھەڵ نایا","کە تۆ خۆت ڕۆحی ڕەوانی ئەی ڕۆح نشین بێ من مەڕۆ","ھەموو شتێکی لە دەست چو دەگەڕێتەوە ڕێک ئەو کاتەی فیر بووی بێ ئەو بژی","بووی بە دۆستی بێگانەو من تەنیا مام","ئارام ترین شوێن لەناو ئەم ژاوە ژاوە باوەشی تۆیە","خۆزگە ئەو توانایەم ھەبوایە بمتوانیایە پێت بڵێم خۆت داپۆشە نەوەك سەرمات بێت","لە دڵی ھەموو ماندا مرۆڤێک ھەیە ھەرگیز نامرێ ئەگەر بوونیشی نەمابێ","ئێمە دەمێکە شەڕمان نەکردوە شەڕ لەسەر دڵخۆش کردنی یەکتر ئەڵێم","ڕووناكیەكانم كوژاندەوە ئەوەی منی ئەوێ فەرموو با خۆی لە پێش چاوما بسوتێنێ","بمرم خۆشەویستیەكەتم بۆ ھەر كێ باسكرد، وتی ئەو خۆشی نەویستوویت!","مۆسیقا برینەکانمی ئاشکرا کرد","ئـەوەیی تـۆیی ئـەوێ بـەھەر بیانویەک بێ ئـەمێنێتەوە","ھەموو شتێک تێئەپەڕێت.","هاتمەوە ، تا خەمەکانم نوێ بکەمەوە..","ئیدی بەبوونی ڪەس مەڵێن جوان ڕۆژێڪ ناشرینی ئەڪات بە نەبوونی..","من ئـەھلی مـنەت کـێشان نـیم دەمێنیتەوە باشە نـامێنیتەوە باشتر","میھرەبان بن ڕۆژێک دێ ھەرگیز یەکتری نابینەوە","کەسێک لە ژیانما نیە،ژیانم لەکەسێکایە.","ھەموویان مرۆڤن لەکاتێکدا تۆ ژیانی","دەستم بگرە تەواوی بوون و نەبوونی من تۆیی","خۆشمەوێیی بە سەلامەتی ھەموو ئەوانەی حەسودی بە جێگاکەت دەبەن","من دەستەکانم ماندووی نوسینن بۆتۆ و تۆش ئاشقی دەستەکانی ئەوی!.","من دەستەکانم ماندووی نوسینن بۆتۆ و تۆش ئاشقی دەستەکانی ئەوی!.","بەڵێنێکی بچوکت پێ دەدەم ، ڕۆژێک لە ھەموو کەسێکدا دەگەڕێی بۆ منێکی تر ، بەڵام نایدۆزیەوە","شـەو وەرە خـەونـم دڵـم بـۆت تـەنـگ بـووە..)!","پەنجەرەكەت بكەرەوە هەر دڵدارەكەی جارانم..","برینەکانم لە دڵخۆشیەکانی تۆ قوڵترە ،پێکەنینەکانشت ژەھرێکە بۆ برینەکانم","بۆ دواجارە بەجێت دێڵم سا ماڵ ئاوا ئازیزەکەم","بەخەیاڵیشمدا نەهاتبو هێندە تەنهابم..","ڕاوەستە با قوڵتر لە سیمات ڕابمێنم کێ دەزانێ ڕەنگە تاتۆدێیەوە من نەمێنم"];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('<a:emoji_21:867156106464067624>').then(r => {
				message.react('');
           });
          });
      }
}
