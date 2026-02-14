const test = document.querySelector('.js-button');
if(test.classList.contains('cart-button')){
    console.log('exist');
}
else{
    console.log('not exist');
}

function convertButton(objectName){
    if(objectName === 'gaming'){
        const val = document.querySelector('.gaming-button');
        
        if(val.classList.contains('OFF-button')){
            val.classList.remove('OFF-button');
            val.classList.add('ON-button');
        }
        else{
            val.classList.remove('ON-button');
            val.classList.add('OFF-button');
        }
    }
    else if(objectName === 'music'){
        const val = document.querySelector('.music-button');
        
        if(val.classList.contains('OFF-button')){
            val.classList.remove('OFF-button');
            val.classList.add('ON-button');
        }
        else{
            val.classList.remove('ON-button');
            val.classList.add('OFF-button');
        }
    }
    else{
        const val = document.querySelector('.tech-button');
        
        if(val.classList.contains('OFF-button')){
            val.classList.remove('OFF-button');
            val.classList.add('ON-button');
        }
        else{
            val.classList.remove('ON-button');
            val.classList.add('OFF-button');
        }
    }
}