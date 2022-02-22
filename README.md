<h3>Movie Web Site (Node, React)</h3>

**1. 전체적인 Template을 간단하게 만들기** <br>
<br>
**2. Movie API에서 가져온 모든 데이터를 STATE에 넣기** <br>
<br>
**3. MainImage Component를 만들기** <br>
<br>
**4. Grid Card Component 만들기** <br> 


<br><br>
**[Config]** <br>

- export const API_URL = `'https://api.themoviedb.org/3/'`<br>
- export const IMAGE_BASE_URL = `'http://image.tmdb.org/t/p/'`<br>

<br><br>
**[Load more Function]** <br>

- Load More 버튼 클릭 시에 일어난다 -> `<button onClick={클래스이름}>` <br>
- `const loadMoreItems` 함수 생성<br>

<img width="1431" alt="image" src="https://user-images.githubusercontent.com/98372474/154900183-a8bbdd44-e4d9-4552-b34b-68e5a7a73db6.png">

<br><br>
**[Movie Detail 페이지 만들기]** <br>

1. 특정 영화에 해당하는 자세한 정보를 가져오기 -> `props.match.params.movieId` <br>
2. 무비 API에서 가져온 정보를 State에다가 집어넣기 <br>
3. 전체적인 Template 간단히 만들기 <br>
4. 영화에 나오는 Crews Information를 가져오기 <br>
5. 가져온 Crew 정보를 State에 넣기 <br>
6. State에 보관된 Data들을 화면에 보여주기 <br>

<br><br>
**[영화 출연진들 가져오기]** <br>

- MovieDetail 의 Cast버전 Toggle에 구현<br>



<img width="1431" alt="image" src="https://user-images.githubusercontent.com/98372474/154900292-aafdf6b5-3513-4d76-a5a6-0264de2e5a30.png">


<br><br>
**[Favorite 버튼 만들기(1)]** <br>

1. Favorite Model 만들기 <br>

+ userForm <br>
+ movieId <br>
+ movieTitle <br>
+ movieImage <br>
+ movieRunTime <br>
<br>

2. Favorite 버튼 UI 만들기 <br>

<img width="1431" alt="image" src="https://user-images.githubusercontent.com/98372474/154900496-e28139c9-af83-4fd2-ac1a-c2159e7ad84f.png">


3. Favorite List에 몇 명이 넣었는지 세기 <br>

4. Favorite List에 내가 넣었는지 세기 (Favorite List 추가 삭제) <br>

5. 데이터를 화면에 보여주기 (Favorite 페이지 만들기) <br>

**[Favorite Page]** <br>

1. Favorite 페이지를 위한 Template 간단히 만들기 <br>
- javascript, css 이용 <br>

2. Mongo DB에서 Favorite으로 된 영화 정보들을 가져오기 <br>

3. 가져온 데이터들을 화면에서 보여주기 <br>

4. Remove 기능 만들기 <br>

