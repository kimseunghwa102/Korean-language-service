var selfa = ['日本語表現','はじめまして、私に名前は田中です。','韓国表現','처음뵙겠습니다. 저의 이름은 다나카입니다.','発音','cheoe um boeb ges sseub ni da. je oui ileumeun danaka ibnida.','録音']

var q = ["(처음 : 始め) , (뵙다 : 御目にかかる) ,(저 : わたくし) ,(이름 : なまえ)"]
function Introducebymyself(slef){
  alert(slef);
	}

function Introduce(self){
document.write( '  <table>')
document.write( '    <tr>')
document.write( '      <th>'+selfa[0]+'</th>')
document.write( '      <td>'+selfa[1]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '    <th>'+selfa[2]+'</th>')
document.write( '      <td><input type="button" value="'+selfa[3]+'" onclick="Introducebymyself(q)"</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfa[4]+'</th>')
document.write( '      <td>'+selfa[5]+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <th>'+selfa[6]+'</th>')
document.write( '      <td>  <audio controls>')
document.write( '          <source src="はじめまして私の名前は.mp3" type="audio/mp3">')
document.write( '          </audio></td>')
document.write( '    </tr>')
document.write( '  </table>')
};
