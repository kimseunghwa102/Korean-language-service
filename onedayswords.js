  var levelone = new Array('고집stubbornness (아집/악착/진피/외고집/생억지)','고충difficulty (괴로움/어려움/곤경/장애)','공모contest (모집/대결/경연/경쟁)','공모 (not contest)conspiracy (음모/모의/결탁)','가설hypothesis (가정/가언)','가설hypothesis (가정/가언)','경향tendency (성향/추세/기질/풍조)')
  var leveltwo = new Array('가닥strand (올/줄)','가상imagination (상상/공상)','각오determination (결심/결정/투지/다짐)','거리낌hesitation (주저/거침)','걸림돌obstacle (방해/장애/장해)','격려encouragement (독려/편달/면려)','견본a sample (샘플/시료/시식)')
  var levelthree = new Array('반드시	 surely','방금	 just now','벌써	 already','변함없이	 still','별로	 not much','비록	 even though','빠짐없이	 no exception','살며시	 lightly','살짝	 slightly','상당히	 considerably','서서히	 slowly','설마	 surely','솔직히	 honestly','수시로	 frequently','스스로	 by oneself','슬쩍	 stealthily')
  var levelfour = new Array('가계부 household ledger','가난	 poverty','가뭄	 drought','가사	 housework','가상	 imagine','가입	 initiation','가족적	 in a family way','가축	 livestock','가치	 value','각각	 each','각자	 respectively','각종	 various','간격	 interval, space out','간접	 indirectness','간판	 signboard','갈등	 conflict','감각	 sensation, sense')
  var levelfive = new Array('가격 値段', '감기 歌風', '감동 感動','가구　家具', '가방　カバン', '가을　秋', '가족　家族', '값　値段', '강　川', '거리　距離', '걱정　心配', '결혼식　結婚式', '경주　試合', '경험　経験', '계절　季節', '계획　計画', '고민　悩み',  '고양이　猫', '고향　故郷', '곳　所', '공연　公演', '공원　公園  ', '공책　ノート', '공항　航行', '과일　果物', '과자　お菓子', '관심　興味', '교통사고　交通事項', '구두　靴', '구입　購入', '그림　絵')
// 극장, 근처, 글자, 금년, 기간, 기분, 김치, 까만색, 꽃, 꽃집, 나라, 나무, 날, 날씨, 남 산, 내년, 내용, 내일, 냉면, 냉장고, 년, 노래, 누나, 눈물, 느낌, 다음, 다음달, 단어, 달,  댁, 도서관, 돈, 동대문, 동생, 뒤, 드라마, 등산, 등산화, 라디오, 러시아, 맞은편, 머 리, 모습, 모자, 무게, 문, 문구점, 문제, 문화, 물건, 미국, 밑, 바지, 박물관, 밖, 반(수업), 방, 방법, 방송국, 배, 배2, 배우, 백화점, 버스, 번호, 병원, 볼펜, 봄, 부모, 부모님,  부분, 부탁, 분위기, 불고기, 비, 비행기, 빵, 사과, 사람, 사무실, 사은품, 사전, 사진,  산, 색, 색깔, 생각, 생일, 생활, 서울, 서울역, 서점, 선물, 선생님, 설명, 설악산, 성격,  소개, 소식, 손, 손님, 수업, 수첩, 시간, 시계, 시장, 시청, 시험, 식당, 식사, 신문, 신발,  아기, 아래, 아버지, 아이스크림, 아저씨, 아주머니, 아침, 아침2, 아파트, 안, 안경,  안내, 앞, 야구, 약, 약국, 약속, 어머니, 어제, 얼굴, 옛날, 여자, 여행, 역사, 연락, 연필,  영수증, 영어, 영화, 옆, 오래간만, 오랜만, 오른쪽, 오후, 올해, 옷, 외국인, 요리사,  요즘, 우산, 우유, 운동, 웬일, 위, 유학, 은행, 음료수, 음식, 음악회, 의미, 의자, 이름,  이번, 이상, 인터넷, 일, 일본, 일본어, 일요일, 자동차, 자리, 자전거, 작년, 잡지, 장소, 저녁, 전자사전, 전화번호, 점심, 정리, 제주도, 졸업, 주, 주말, 주소, 주인, 준비,  중국, 지갑, 지난주, 지난해, 지하철, 집, 찻값, 창문, 책, 책상, 청소, 축구, 취미, 취직,  치마, 친구, 침대, 카메라, 캐나다, 커피, 컴퓨터, 큰형, 테니스장, 토요일, 통장, 파란 색, 파티, 편지, 평일, 포도, 표, 품목, 피아노, 필요, 하숙집, 학원, 한국, 한국말, 한국 어, 한복, 한식집, 할머니, 할아버지, 할인, 행사, 형, 호, 호선, 회사, 회사원, 회의, 후,  휴일, 희망, 힘,개, 권, 대, 마리, 명, 번, 병, 분, 사람, 살, 송이, 인분, 잔, 장, 층, 통,가다, 가져가다, 가지고 가다, 갈아타다, 감기에 걸리다, 갔다오다, 갖다, 걱정하다, 건너가다, 걸리다, 경험하다, 계획을 세우다, 계획하다, 고르다, 고장이 나다,  구경하다, 구하다, 그리다, 기다리다, 기억을 하다,  기억이 나다, 길이 막히다,  깎다, 꺼내다, 끄다, 끊다, 끝나다,  끝내다, 끼다, 나가다, 나오다, 내다(돈), 내리다,  넣다,  노래 부르다,  노래하다,  노력하다, 놀다, 농구하다, 눈물이 나다, 다녀오다, 다니다, 닫다, 대답하다, 도착하다, 돈이들다, 돌아오다, 되다, 드리다, 드시다, 듣다, 들다, 들어가다, 떠나다, 마시다, 마음에 들다, 마치다, 만나다, 만들다, 말씀 드리다, 말씀하시다, 말하다, 먹다, 모르다, 모으다, 모자라다, 목욕하다, 묻다, 물어보다, 받다, 밥 먹다, 배우다, 벗다, 보내다, 보다, 부르다, 부치다, 부탁하다, 빌려주다, 빌리다, 빼다, 사고가 나다, 사다, 사용하다, 사진을 찍다, 산책하다, 살다, 서다, 설거지하다, 설명하다, 소개하다, 수영하다, 쉬다, 시작되다, 시작하다, 시키다, 식사하다, 신다, 싫어하다, 쓰다, 쓰다(모자), 씻다, 앉다, 알다, 알아듣다, 어울리다, 여행하다, 연락하다, 연습하다, 열이나다, 예약하다, 오다, 오르다, 올라오다, 우산을쓰다, 운동하다, 운전하다, 웃다, 이사가다, 이사하다, 이야기하다, 이용하다, 이해하다, 일어나다, 읽다, 잃다, 잃어버리다, 입다, 잊다, 잘 되다,  잘하다, 잠이 오다,  잡수시다, 전하다, 전화(를) 걸다, 전화를 바꿔주다, 전화를 받다,  전화를 하다, 전화하다, 조심하다, 좋아하다,  주다, 주무시다, 주문하다, 준비하다, 지나다, 지내다, 질문하다, 짓다, 찾다, 찾아가다, 청소하다, 초대하다, 축구를 하다, 출발하다, 취직하다, 켜다, 콧물이 나다, 타다, 테니스 치다, 틀리다, 푹 자다, 피아노를 치다, 하다, 화나다, 회의하다
//
// 가볍다, 감사하다, 계시다, 고맙다, 공기가 맑다, 괜찮다, 기분이 좋다, 길다, 깊다, 깨끗하다, 나쁘다, 적다, 낮다, 넓다, 높다, 다르다, 더럽다, 덥다, 따뜻하다, 많다, 맑다, 맛없다, 맛있다, 멋있다, 무섭다, 미안하다, 반갑다, 밝다, 배가 고프다, 배가 부르다, 배고프다, 복잡하다, 부지런하다, 불편하다, 비슷하다, 비싸다, 새롭다, 쉽다, 슬프다, 싫다, 싸다, 아름답다, 아프다, 어둡다, 어리다, 없다, 예쁘다, 위험하다, 유명하다, 이상하다, 있다, 작다, 재미있다, 적다, 조용하다, 좁다, 좋다, 죄송하다, 중요하다, 즐겁다, 짧다, 춥다, 친절하다, 크다, 키가 크다, 편리하다, 편안하다, 편하다, 피곤하다, 필요하다, 한가하다, 힘들다,가까이, 가끔, 가장, 갑자기, 같이, 거의, 계속, 곧, 그냥, 금방, 꼭, 나중에, 날마다(날+마다)=매일, 너무, 늦게, 다, 더, 따로, 또, 똑바로, 마침내, 많이, 매우, 매일, 먼저, 모두, 못, 미리, 바로, 방금, 벌써, 별로, 보통, 빨리, 새로, 서로, 아까, 아마, 아주, 아직, 어서, 안, 언제나, 열심히, 오래, 오래간만에, 오랜만에, 요즘, 이따가, 이제, 일찍, 자주, 잘, 잠깐, 잠시, 전혀, 정말, 제일, 조금, 조용히, 좀, 지금, 직접, 참, 처음, 천천히, 크게, 별히, 특히, 푹, 함께, 항상, 혼자,  혼자서,그래서, 그러나, 그러니까, 그러면, 그럼, 그런데, 그리고,누구, 무엇, 뭐, 어디, 어떻게, 언제, 얼마나, 왜, 어느, 몇, 무슨,글쎄요,  네,  아니요,  여보세요,  예




  function dependonlever(a){
    return a[Math.floor(Math.random() * a.length)];
}

document.write( '<table id="tablealine">')
document.write( '  <thead style="display: block;">')
document.write( '    <tr id="textbasyo">')
document.write( '    <th>一日韓国語表現<br>(準備中)</th>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <td class="leversize">Level.1</tb>')
document.write( '        <td class="contnetsize">'+dependonlever(levelone)+'</td>')
document.write( '    </tr>')

document.write( '    <tr>')
document.write( '      <td class="leversize">Level.2</tb>')
document.write( '        <td class="contnetsize">'+dependonlever(leveltwo)+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <td class="leversize">Level.3</tb>')
document.write( '        <td class="contnetsize">'+dependonlever(levelthree)+'</td>')
document.write( '    </tr>')
document.write( '    <tr>')
document.write( '      <td class="leversize">Level.4</tb>')
document.write( '        <td class="contnetsize">'+dependonlever(levelfour)+'</td>')
document.write( '    </tr>')

document.write( '    <tr>')
document.write( '      <td class="leversize">Level.5</tb>')
document.write( '        <td class="contnetsize">'+dependonlever(levelfive)+'</td>')
document.write( '    </tr>')
document.write( '  </thead>')
document.write( '</table>')
