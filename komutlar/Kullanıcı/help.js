
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    config: {
        name: "yardım",
        aliases: [],
        kategori: "Kullanıcı",
        description: "Yardım",
    },
    run: async (client, message) => {

const kulsayi = []
client.guilds.cache.forEach((item, i) => {
    kulsayi.push(item.memberCount)
});
var toplamkulsayi = 0
for (var i = 0; i < kulsayi.length; i++) {
    if (isNaN(kulsayi[i])){
        continue;
    }

    toplamkulsayi += Number(kulsayi[i])
}

const row = new ActionRowBuilder()
.addComponents(
  new SelectMenuBuilder()
  .setCustomId("yardım")
  .setPlaceholder('📌 Komut Kategorileri')
  .setMinValues(1)
  .setMaxValues(1)
  .addOptions([
    {
      label: "Admin",
      description: "Bot içerisindeki Admin komutları",
      value:"Admin",
      emoji:"🔐"
  },
  {
    label:"Moderasyon" ,
    description:"Moderasyon Komutlarını Listeler.",
    value:"Moderasyon",
    emoji:"🔰"
  },
  {
    label:"Kullanıcı",
     description:"Kullanıcı Komutlarını Listeler.",
     value:"kullanıcı",
     emoji:"🌐"
 },
    {
      label:'Müzik',
      description:'Müzik Komutlarını Listeler.',
      value:'Müzik',
      emoji: '🎵'
    },
    {
      label:'Filtre',
      description:'Filtre Komutlarını Listeler.',
      value:'Filtre',
      emoji: '🎵'
    },
    {
      label: "Kayıt",
      description: "Bot içerisindeki Kayıt komutları",
      value:"Kayıt",
      emoji:"📜"
  },
  
  {
    label:"Level",
    description:"Level Komutlarını Listeler.",
    value:"Level",
    emoji:"💎"
  },
  {
    label:"Ekonomi",
    description:"Ekonomi Komutlarını Listeler.",
    value:"Ekonomi",
    emoji:"💰"
   },
   {
    label:"Eğlence",
    description:"Eğlence Komutlarını Listeler.",
    value:"Eğlence",
    emoji:"🎪"
   },      
    ])
  )

let s = new EmbedBuilder()
.addFields(
    { name: client.botunadı, value: 'Beni Tercih Ettiğiniz İçin Teşekkür Ederim Özelliklerim Aşağıda Size Sunulmuştur.\n[Destek Sunucum](https://discord.gg/)\n[Oy vermek İçin](https://top.gg/bot)\n[Davet Etmek İçin](https://discord.com/api/oauth2/authorize?client_id=1041658492932587520&permissions=8&scope=applications.commands%20bot)', inline: false },
    { name: '\nHakkımda', value: 'Botumuz insanlara kolaylık versin ve birlikte birşeyler yapabilsinsinler diye kurulmuş bir bottur birlikte müzik dinleyip oyun oynamak gibi .yardım ', inline: false },
    { name: 'Yapılma Tarihim', value:  '02/12/2022', inline: false },
    { name: 'Çalışma Sürem', value: `**${moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]')}** `, inline: false },
    { name: 'Komut Sayısı', value: `${client.commands.size}`, inline: true },
    { name: 'Sunucu Sayısı', value: `${client.guilds.cache.size}`, inline: true },
    { name: 'Kullanıcı Sayısı', value: `${toplamkulsayi}`, inline: true },
    { name: 'Kanal Sayısı', value: `${client.channels.cache.size}`, inline: true },
    { name: 'Emoji Sayısı', value: `${client.emojis.cache.size}`, inline: true },
    { name: 'Ping', value: `${client.ws.ping}`, inline: true },
    { name: 'Nasıl Kullanırım', value: 'Menüden Görmek İstediğiniz Komutların Kategorisini Seçin.', inline: false },)
    .setFooter({ text: `${message.author.username} Tarafından İstendi.`, iconURL: message.author.displayAvatarURL({dynamic:true}) })
    .setColor("#000001")
    .setImage('https://media.discordapp.net/attachments/1012088555755028561/1048258960970493962/standard.gif?width=720&height=405')    
message.channel.send({embeds: [s], components: [row]})

},
}
