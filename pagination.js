const totalResults = 227;
const pageinatedListLength = 23 
let page =1
const pageSize =10 // 한페이지에 보여질 item갯수
const groupSize =5
let lastPage;
let firstPage;
let prevStatus = "disabled";
let nextStatus = '';


function makeGroups(totalItems, gSize){
    let groups =[]
    let list =[]
    for(let i=1; i<=totalItems; i++){
        
        if( i % gSize != 0){
            if( i==1){
                list.push(i)   // [1]
            }
            list.push(i+1)     // 2, 3, 4, 5
        } else{           // 5의 배수
            groups.push(list)   // [1,2,3,4,5]
            list =[]
            list.push(i+1)       // [6]
        }
    
        if ( i == totalItems){
            groups.push(list)
        }
    }
    console.log('groups : ', groups)
    console.log('groups.length : ', groups.length)
    return groups
}

makeGroups(totalResults, groupSize)




//! 저 아래의 페이지네이션 랜러는 다음과 같이 바뀌어야 된다.
// 다음 랜더 함수의 인자로 그룹 번호가 들어간다. 처음에는 첫번째 그룹이니 1일 들어간다.

function paginationRender(groupNumber){   // 1, 2, 3...
    document.querySelector('.pagination').innerHTML ='' // 기존내용 삭제
    const currentGroup = groupNumber      // nextGroup을 다루기 위해 변수 필요
    const group = groups[currentGroup-1]  // 첫번째 그룹은 groups[0]  
                       // [1,2,3,4,5] 혹은 [6,7,8,9,10]

    // 일단 페이지번호만 메긴다면
    let paginationHTML = group.map(i => {
        `<button onclick="moveToPage(${i})">${i}</button>`
        }).join('')

    document.querySelector('.pagination').innerHTML = paginationHTML;
}

// 브라우저 첫화면에
// paginationRender(group[0]) 를 실행한다.
// 위 버튼에서 추가로 <<     >> 버튼을 만들어서
//  >> 버튼을 누르면,  
// const nextGroup = currentGroup +1;
// paginationRender(nextGroup)   

// 마지막 그룹인지 여부를 판단해야 된다.
// 총그룹수는  Math.ceil(totalResults / groupSize) 이다. 반올림한 것이다. 
// Math.ceil( 227 / 5) = 46

// >>을 눌러서 다음 그룹을 선택할 때,
//  if (nextGroup <= 46 )  이것을 만족할 때 화면을 랜더링한다.






// 아래는 이전에 사용했떤 함수이다. 참고용이다.
function paginationRender(){
    const totalPage = Math.ceil(totalResults / pageSize)
    const pageGroup = Math.ceil(page /groupSize)
    lastPage = pageGroup * groupSize
    
    firstPage = lastPage - groupSize +1
    if (lastPage > totalPage){
        lastPage = totalPage
    }
    if (firstPage == lastPage){
        nextStatus = 'disabled'
    }
    
    let paginationHTML =`<li class="page-item prev ${prevStatus}"><div class="page-link" onclick="moveToPage(${firstPage})"><<</div></li><li class="page-item prev ${prevStatus}"><div class="page-link" onclick="moveToPage(${page-1})">Previous</div></li>`;
    // page가 전역변수라서 page-1 이 최신페이지에서 이전페이지가 된다.
    
    for (let i=firstPage; i<=lastPage; i++){
        paginationHTML += `<li class="page-item" onclick="moveToPage(${i})" ><div class="page-link ${i==page ? 'active' : ''}" href="#">${i}</div></li>`
    }

    paginationHTML += `<li class="page-item next ${nextStatus}"><div class="page-link" onclick="moveToPage(${page+1})">Next</div></li><li class="page-item next ${nextStatus}"><div class="page-link" onclick="moveToPage(${lastPage})">>></div></li>`

    document.querySelector('.pagination').innerHTML = paginationHTML;

}

async function moveToPage(pageNo){    
    const prevs = document.querySelectorAll('.prev')
    const nexts = document.querySelectorAll('.next')

    if (pageNo >= firstPage && pageNo <= lastPage){
        page = pageNo;
        if (page > firstPage ){  
            prevStatus ='' 
        } else {
            prevStatus ='disabled'
        }
        if (page < lastPage){
            nextStatus =''
        } else{
            nextStatus ='disabled'
        }
        
        
    } else {
        return;
    }
    // url = url+`&pageSize=${pageSize}&page=${page}`
    // 위에서 URL.searchParams.set()을 사용하므로 여기서는 주석
    await getNews()  // getNews에 paginationRender()가 포함되어 있다.

}