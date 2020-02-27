let array= [];
let count=0;
for (let i = 0; i < 10; i++) {
    array[i]=prompt('Nhap vao phan tu thu '+i);
}
for (i in array){
    for (j in array[i]) {
        if(isNaN(array[i][j])===false){
            count++;
        }
    }
}
alert(count);