const data1 = [1,2,3,4]
const data2 = [1,2,3,4,5]
const data3 = [1,2,3,4,5,6]
const data4 = [1,2,3,4,5,6,7,8,9,10]
const data5 = [2,3,1,1,4,7,4,2,6,6,5,7,8,0]
const data6 =[]

function paginateData(dataList, pageSize){
    const pagedList =[]
    let list =[]
    const dataLength = dataList.length

    if (dataLength <= pageSize){   // 일단 pageSize 5로 생각
        console.log('paginatedData :', dataList)
        return dataList
    }

    for( let i=0; i<dataLength; i++){  
        list.push(dataList[i])         
        if(list.length % pageSize == 0){
            pagedList.push([...list])
            list =[]
        }  
    }
    // 나머지 넣지 못한 것
    if (list.length > 0){
        pagedList.push([...list])
    }
    console.log('paginatedData :', pagedList)
    return pagedList    
}

// console.log('data1 :', paginateData(data1, 5))
// console.log('data2 :', paginateData(data2, 5))
// console.log('data3 :', paginateData(data3, 5))
paginateData(data4, 5)
paginateData(data6, 5)




// groups 만들기  (정확히는 pageGroup이다. 한 그룹에 10페이지 담고 있다.)
function makeGroups(totalResults, groupSize, pageSize){
    
    totalGroupPages = Math.ceil(totalResults / pageSize)
    console.log(totalGroupPages)
    groups =[]
    let list =[]
    for(let i=1; i<=totalGroupPages; i++){
        list.push(i)
        if( i % groupSize == 0){   // 일단 groupSize 5로 가정
            groups.push([...list])  // 이렇게 독립해야
            list =[]               // list를 변화시켜도 영향 안받는다.
        } 
    }
    if(list.length > 0){
        groups.push([...list])
    }
    console.log('groups : ', groups)
    console.log('groups.length : ', groups.length)
    return groups
}


