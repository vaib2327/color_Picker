const colors = document.querySelectorAll(".color")
const body = document.querySelector('body')

colors.forEach(function (color) {
    color.addEventListener( 'click', function (picker) {
        const colorId = picker.target.id;
        switch (colorId) {
            case 'red':
                body.style.backgroundColor = 'red';
                break;
            
            case 'orange':
                body.style.backgroundColor = 'orange';    
                break;

            case 'gray':
                body.style.backgroundColor = 'gray';  
                break;
            
            case 'green':
                body.style.backgroundColor = 'green';
                break;
        }
    })
})