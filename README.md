# 사용방법

파일선택으로 원하는 json 파일을 읽어오면, 그에 맞게 기사가 나열됩니다.

NYnews는 영문 일반기사
business는 영문 비지니스기사

kr1은 한글 일반기사

kr_enter1은 한글 엔터테인먼트기사


이 자료를 갖고, 페이지네이션을 구현해 보세요.

그리고 category를 연결해 보세요.
(business, entertainment, 한국엔터...)

검색기능은 읽어온 json파일을 가공해서 객체자료로 만들고, filter함수를 이용해서 해당 리스트에서 해당값을 가진 객체들을 뽑아내면 될 것 같습니다.
만약 필요하면, 모든 json파일을 합친 total.json 파일을 만들어서, 그것을 이용해서 검색해도 될 것 같습니다.


##  script.js에서는 파일로부터 json파일을 읽어오는 방식이고
##  script2.js에서는 그냥 데이터를 js파일에 복사해 넣고 이용하는 방식입니다.  이 방식이 처음에는 더 쉽겠네요.

