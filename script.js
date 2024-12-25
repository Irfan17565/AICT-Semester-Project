document.getElementById('button1').addEventListener('click',function(){
        alert('You have successfully logged In!');
}
)
document.getElementById('button4').addEventListener('click',function(){
    alert('Your seat has been reserved.You will be informed soon!');
}
)
document.getElementById('button2').addEventListener('click',function(){
    alert('Your complaint has been saved.You will be informed soon!');
}
)

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const phoneInput = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{10}$/; 

    if (!phoneRegex.test(phoneInput)) {
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
        alert('Thank you! We will contact you shortly.');
    }
});
