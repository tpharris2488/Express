document.getElementById('theForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var url = '/formsubmissions';

    var name = document.getElementById('input1').value;
    var email = document.getElementById('input2').value;
    var inputs = {
        name: `${name}`,
        email: `${email}`
    };
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    }).then((res) => {
        console.log(res.status);
    }).catch((err) => {
        console.log(err);
    });
});