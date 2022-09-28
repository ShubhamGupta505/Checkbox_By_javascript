head = document.getElementById('head')
body = document.getElementById('body')
shoulder = document.getElementById('shoulder')
button = document.getElementById('btn')
arr = []

const submitBtn = () => {
    if (head.checked == true){
        console.log(head.value)
        arr.push(head.value)
    }
    if (body.checked == true){
        console.log(body.value)
        arr.push(body.value)
    }
    if (shoulder.checked == true){
        console.log(shoulder.value)
        arr.push(shoulder.value)
    }
    console.log(arr)
    arr = []
    head.checked = false
    body.checked = false
    shoulder.checked = false
}

button.addEventListener('click',submitBtn)