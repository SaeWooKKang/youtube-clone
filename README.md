# youtube-clone cording
유튜브 메인페이지와 상세페이지를 제작했습니다.  

영상과 제목을 누르면 상세페이지로 이동합니다.  

상세페이지에서 화면 크기에 따라 ui를 변경했습니다.


## html

<li> header와 main section으로 구분

## scss

<li>@import, @mixin, variable, 파일 parcials 사용

## javascript

### router()

<li> 화면 변환 함수로 hash를 이용한 경로 설정, 함수 호출

### makeHeader()

<li> 템플릿 사용, 헤더영역 제작 함수

### makeFeed()

<li> makeHeader() 실행
<li> 템플릿 사용, mainFeed제작 함수

### videoDetail()

<li> makeHeader() 실행
<li> 템플릿 사용,  비디오 화면 제작
