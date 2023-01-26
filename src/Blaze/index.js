import axios from "axios";
import { Telegraf } from "telegraf";

const bot = new Telegraf("5919311963:AAGt16CMPOcNjk_I0gcvK9FPFQ4YTaUs_-E");
const tokenWin = "CAACAgEAAxkBAAIBZmPQgIw04i-VzNmGbon5dR_ffIMnAAKNAgAC2vqYR85jELH6CAEKLQQ";
const tokenLoss = "CAACAgEAAxkBAAIBaWPQgI-sPTdvdQABoP7i1lxpydwVUgACEQIAAvqqmEfmghiZF6aGxy0E";
const tokenWinBranco = "CAACAgEAAxkBAAIBZ2PQgI7oCLSa-bbkgpbgnz17NVZ-AAKlAgACDr2ZRwJCHf6fmiOqLQQ";
const tokenChat = -1001677942242;
let corAtual;

function atualizarCor() {
  axios
  .get("https://api2.minhablaze.com.br/api/v1/result/double")

  .then(function (response) {
    (response) => response.json();

    let resultados = response.data.results;
    let tamanho = resultados.length;
    let casa = 1;
    let indice = tamanho - casa;
    let cor = resultados[indice].color;
    corAtual = cor;
  })
}
setInterval(() => {
  atualizarCor();
}, 1000);
  
function startRobo() {
  axios
    .get("https://api2.minhablaze.com.br/api/v1/result/double")

    .then(function (response) {
      (response) => response.json();

      let resultados = response.data.results;
      let tamanho = resultados.length;
      let casa = 1;
      let indice = tamanho - casa;
      let roll = resultados[indice].roll;
      let casaAnterior = 2;
      let indiceAnterior = tamanho - casaAnterior;
      let rollAnterior = resultados[indiceAnterior].roll;
      let cor = resultados[indice].color;

      return telegram(roll, rollAnterior, cor);
    })
    .catch((err) => {
      console.log(err);
    });
}  

function zeroFill(n) {
  return n < 9 ? `0${n}` : `${n}`;
}

function formatDate(date) {
  // const d = zeroFill(date.getDate());
  // const mo = zeroFill(date.getMonth() + 1);
  // const y = zeroFill(date.getFullYear());
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());

  return `${h}:${mi}`;
}

function telegram(roll, rollAnterior, cor) {
  console.log("local Atual", roll);
  console.log("local Anterior", rollAnterior);
  console.log("COR", cor);

  //ONZE
  const dataOnze = new Date();
  dataOnze.setSeconds(dataOnze.getSeconds() + 0);
  dataOnze.setMinutes(dataOnze.getMinutes() + 5);
  dataOnze.setHours(dataOnze.getHours() + 0);

  //OITO
  const dataOito = new Date();
  dataOito.setSeconds(dataOito.getSeconds() + 0);
  dataOito.setMinutes(dataOito.getMinutes() + 4);
  dataOito.setHours(dataOito.getHours() + 0);

  //NOVE
  const dataNove = new Date();
  dataNove.setSeconds(dataNove.getSeconds() + 0);
  dataNove.setMinutes(dataNove.getMinutes() + 4);
  dataNove.setHours(dataNove.getHours() + 0);

  //DEZ
  const dataDez = new Date();
  dataDez.setSeconds(dataDez.getSeconds() + 0);
  dataDez.setMinutes(dataDez.getMinutes() + 5);
  dataDez.setHours(dataDez.getHours() + 0);

  //DOZE
  const dataDoze = new Date();
  dataDoze.setSeconds(dataDoze.getSeconds() + 0);
  dataDoze.setMinutes(dataDoze.getMinutes() + 6);
  dataDoze.setHours(dataDoze.getHours() + 0);

  //TREZE
  const dataTreze = new Date();
  dataTreze.setSeconds(dataTreze.getSeconds() + 0);
  dataTreze.setMinutes(dataTreze.getMinutes() + 6);
  dataTreze.setHours(dataTreze.getHours() + 0);

  //SEIS
  const dataSeis = new Date();
  dataSeis.setSeconds(dataSeis.getSeconds() + 0);
  dataSeis.setMinutes(dataSeis.getMinutes() + 3);
  dataSeis.setHours(dataSeis.getHours() + 0);

  switch (cor) {
    case 1:
      cor = "Vermelho";
      break;
    case 2:
      cor = "Preto";
      break;
    case 0:
      cor = "Branco";
      break;
  }

  if (roll === rollAnterior) {
    console.log("Numeros iguais. Espere a próxima rodada")
  } else {
  // 0

  if (roll === 0) { 
    setTimeout(() => {
      bot.telegram.sendSticker(tokenChat, tokenWinBranco);
      startRobo();
    }, 5000); 
  }
  
  // 1

  if (roll === 1) { 
    setTimeout(() => {
      startRobo();
    }, 40000); 
  }
  
  // 2
  
  if (roll === 2) {
    setTimeout(() => {
      startRobo();
      console.log("2")
    }, 20000); 
  }
    // 3

  if (roll === 3) {
    setTimeout(() => {
      startRobo();
      console.log("3")
    }, 20000); 
  }

  // 4

  if (roll === 4) {
    setTimeout(() => {
      startRobo();
      console.log("4")
    }, 20000); 
  }

  // 5

  if (roll === 5) { 
    setTimeout(() => {
      startRobo();
      console.log("5")
    }, 20000); 
  }

  // 7

  if (roll === 7) {
    setTimeout(() => {
      startRobo();
      console.log("7")
    }, 20000); 
  }

  // 14

  if (roll === 14) {
    setTimeout(() => {
      startRobo();
      console.log("14")
    }, 20000);
  } 

    //TREZE
  
    if (roll === 13 && rollAnterior != 13) {
      processar_Treze(cor, dataTreze);
    }
  
    //DOZE
  
    if (roll === 12 && rollAnterior != 12) {
      processar_Doze(cor, dataDoze);
    }
  
    //DEZ
  
    if (roll === 10 && rollAnterior != 10) {
      processar_Dez(cor, dataDez);
    }
  
    //NOVE
    if (roll === 9 && rollAnterior != 9) {
      processar_Nove(cor, dataNove);
    }
  
    //SEIS
  
    if (roll === 6 && rollAnterior != 6) {
      processar_Seis(cor, dataSeis);
    }
  
    //OITO
    
    if (roll === 8 && rollAnterior != 8) {
      processar_Oito(cor, dataOito);
    }
  
    //ONZE
    
    if (roll === 11 && rollAnterior != 11) {
      processar_Onze(cor, dataOnze);
    }
  }
  

}

startRobo();
 
function processar_Treze(cor, dataTreze) {
  


  //     //TREEEEEEZE 13
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
  }, 1000);

    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      tokenChat,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
        dataTreze
      )} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      console.log("COR verificação SINAL palpite", cor)

      if (cor === "Vermelho" || cor === 1) {
        bot.telegram.sendSticker(tokenChat, tokenWin);
        startRobo();
      } else if (cor !== "Vermelho" || cor === 1) {
        bot.telegram.sendMessage(
          tokenChat,
          `<b> ❇️ 1º GALE</b>`,
          { parse_mode: "HTML" }  
        );
        setTimeout(() => {
          console.log("COR verificação SINAL G1", cor)

          if (cor === "Vermelho") {
            bot.telegram.sendSticker(tokenChat, tokenWin);
            startRobo();
          } else if (cor !== "Vermelho" || cor === 1) {
            bot.telegram.sendMessage(
              tokenChat,
              `<b> ❇️ 2º GALE</b>`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              console.log("COR verificação SINAL G2", cor)

              if (cor === "Vermelho" || cor === 1) {
                bot.telegram.sendSticker(tokenChat, tokenWin);
                startRobo();
              } else {
                bot.telegram.sendSticker(tokenChat, tokenLoss);
                startRobo();
              }
            }, 28000); //28000
          }
        }, 28000);
      }
    }, 360000); //360000
}

function processar_Doze(cor, dataDoze) {
  //     //DOZZZZZZZE 12
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
  }, 1000);

    console.log("COR ATUALIZADA TREZE", cor)    

    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      tokenChat,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataDoze)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Preto" || cor === 2) {
        bot.telegram.sendSticker(tokenChat, tokenWin);
        startRobo();
      } else if (cor !== "Preto" || cor === 2) {
        bot.telegram.sendMessage(
          tokenChat,
          `<b>❇️ 1º GALE</b>`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Preto" || cor === 2) {
            bot.telegram.sendSticker(tokenChat, tokenWin);
            startRobo();
          } else if (cor !== "Preto" || cor === 2) {
            bot.telegram.sendMessage(
              tokenChat,
              `<b> ❇️ 2º GALE</b>`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Preto" || cor === 2) {
                bot.telegram.sendSticker(tokenChat, tokenWin);
                startRobo();
              } else {
                bot.telegram.sendSticker(tokenChat, tokenLoss);
                startRobo();
              }
            }, 28000);
          }
        }, 28000);
      }
    }, 360000);
}

function processar_Dez(cor, dataDez) {
  //     //DEZZZZZZZ 10
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
  }, 1000);

    console.log("COR ATUALIZADA TREZE", cor)

    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      tokenChat,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataDez)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Vermelho" || cor === 1) {
        bot.telegram.sendSticker(tokenChat, tokenWin);
        startRobo();
      } else if (cor !== "Vermelho" || cor === 1) {
        bot.telegram.sendMessage(
          tokenChat,
          `<b> ❇️ 1º GALE</b>`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Vermelho" || cor === 1) {
            bot.telegram.sendSticker(tokenChat, tokenWin);
            startRobo();
          } else if (cor !== "Vermelho" || cor === 1) {
            bot.telegram.sendMessage(
              tokenChat,
              `<b> ❇️ 2º GALE</b>`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Vermelho" || cor === 1) {
                bot.telegram.sendSticker(tokenChat, tokenWin);
                startRobo();
              } else {
                bot.telegram.sendSticker(tokenChat, tokenLoss);
                startRobo();
              }
            }, 28000);
          }
        }, 28000);
      }
    }, 300000);
}

function processar_Nove(cor, dataNove) {

  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
  }, 1000);
    
  console.log("COR ATUALIZADA TREZE", cor)

  //NOVEEEEEEEEEEEE 9
  
      console.log("PALPITE DE SINAL");
      bot.telegram.sendMessage(
        tokenChat,
        `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataNove)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
        { parse_mode: "HTML" }
      );

      setTimeout(() => {
        if (cor === "Vermelho" || cor === 1) {
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
        } else if (cor !== "Vermelho" || cor === 1) {
          bot.telegram.sendMessage(
            tokenChat,
            `<b>❇️ 1º GALE</b>`,
            { parse_mode: "HTML" }
          );
          setTimeout(() => {
            if (cor === "Vermelho" || cor === 1) {
              bot.telegram.sendSticker(tokenChat, tokenWin);
              startRobo();
            } else if (cor !== "Vermelho" || cor === 1) {
              bot.telegram.sendMessage(
                tokenChat,
                `<b>❇️ 2º GALE</b>`,
                { parse_mode: "HTML" }
              );
              setTimeout(() => {
                if (cor === "Vermelho" || cor === 1) {
                  bot.telegram.sendSticker(tokenChat, tokenWin);
                  startRobo();
                } else {
                  bot.telegram.sendSticker(tokenChat, tokenLoss);
                  startRobo();
                }
              }, 28000);
            }
          }, 28000);
        }
      }, 255000); //255000
}    

function processar_Seis(cor, dataSeis) {
  //     //OIIIIIIIIIITO 6
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
  }, 1000);

  console.log("COR ATUALIZADA TREZE", cor)

    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      tokenChat,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataSeis)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Vermelho" || cor === 1) {
        bot.telegram.sendSticker(tokenChat, tokenWin);
        startRobo();
      } else if (cor !== "Vermelho" || cor === 1) {
        bot.telegram.sendMessage(
          tokenChat,
          `<b>❇️ 1º GALE</b>`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Vermelho" || cor === 1) {
            bot.telegram.sendSticker(tokenChat, tokenWin);
            startRobo();
          } else if (cor !== "Vermelho" || cor === 1) {
            bot.telegram.sendMessage(
              tokenChat,
              `<b> ❇️ 2º GALE</b>`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Vermelho" || cor === 1) {
                bot.telegram.sendSticker(tokenChat, tokenWin);
                startRobo();
              } else {
                bot.telegram.sendSticker(tokenChat, tokenLoss);
                startRobo();
              }
            }, 28000);
          }
        }, 28000);
      }
    }, 180000);
}

function processar_Oito(cor, dataOito) {
  //     //OITOO
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
  }, 1000);
  
  console.log("COR ATUALIZADA TREZE", cor)

    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      tokenChat,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
        dataOito
      )} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      console.log("COR verificação SINAL palpite", cor)

      if (cor === "Preto" || cor === 2) {
        bot.telegram.sendSticker(tokenChat, tokenWin);
        startRobo();
      } else if (cor !== "Preto" || cor === 2) {
        bot.telegram.sendMessage(
          tokenChat,
          `<b> ❇️ 1º GALE</b>`,
          { parse_mode: "HTML" }  
        );
        setTimeout(() => {
          console.log("COR verificação SINAL G1", cor)

          if (cor === "Preto" || cor === 2) {
            bot.telegram.sendSticker(tokenChat, tokenWin);
            startRobo();
          } else if (cor !== "Preto" || cor === 2) {
            bot.telegram.sendMessage(
              tokenChat,
              `<b> ❇️ 2º GALE</b>`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              console.log("COR verificação SINAL G2", cor)

              if (cor === "Preto" || cor === 2) {
                bot.telegram.sendSticker(tokenChat, tokenWin);
                startRobo();
              } else {
                bot.telegram.sendSticker(tokenChat, tokenLoss);
                startRobo();
              }
            }, 28000);
          }
        }, 28000);
      }
    }, 240000); //
}

function processar_Onze(cor, dataOnze) {

  // ONZEEEEEEEEEEE 11
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
  }, 1000);
    
    console.log("COR ATUALIZADA TREZE", cor)

    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      tokenChat,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOnze)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Preto" || cor === 2) {
        bot.telegram.sendSticker(tokenChat, tokenWin);
        startRobo();
      } else if (cor !== "Preto" || cor === 2) {
        bot.telegram.sendMessage(
          tokenChat,
          `<b> ❇️ 1º GALE</b>`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Preto" || cor === 2) {
            bot.telegram.sendSticker(tokenChat, tokenWin);
            startRobo();
          } else if (cor !== "Preto" || cor === 2) {
            bot.telegram.sendMessage(
              tokenChat,
              `<b> ❇️ 2º GALE</b>`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Preto" || cor === 2) {
                bot.telegram.sendSticker(tokenChat, tokenWin);
                startRobo();
              } else {
                bot.telegram.sendSticker(tokenChat, tokenLoss);
                startRobo();
              }
            }, 28000);
          }
        }, 28000);
      }
    }, 305000);
}




  // bot.telegram.sendPhoto(tokenChat, "SINAL VENCEDOR TESTE");

  // if (cor == "Vermelho") {
  //     bot.telegram.sendMessage(-1001677942242, "VERMELHOOO");
  // }

  // if (cor == "Preto") {
  // }

  // if (cor == "Branco") {
  //     bot.telegram.sendMessage(-1001677942242, "BRANCOOOO");
  // }

// setInterval(() => {
// }, 5000)

// // bot.telegram.sendMessage(1159964065, "bora ganhar dinheiro");
// // bot.start((ctx) => ctx.reply('Welcome'));
// // bot.help((ctx) => ctx.reply('Send me a sticker'));
// // bot.on('sticker', (ctx) => ctx.reply('👍'));
// // bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// // bot.launch();
