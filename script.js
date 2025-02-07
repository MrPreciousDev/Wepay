const ctx = document.getElementById("myChart");
const getGradient = (Ctx, chartArea) =>{
    let gradient = ctx.createLinearGradient (0, chartArea.bottom,0,chartArea.top);
}



new chart(ctx, {
    type:"line",
    data: {
        labels: ["Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets:[
            {
                data:[3,2,5,4,19,20,17,15,21],
                borderWidth:2,
                borderColor: "#157bf8",
                lineTension: 0.8,
                fill:true,
                backgroundColor: (context) =>{
                    const chart = context.chart;
                    const {ctx,chartArea} = chart;
                    if(!chartArea) return;
                    return getGradient(ctx, chartArea);
                }

            }
        ]

    },
    option: {
        responsive:false,
        scales:{
            y:{beginAtZero: true}
        },
        Plugins: {
            legend: {display: false},
        }
    },
});


const transaction = [
    {
        status: 1,
        name: "Jame Peter",
        image: "assets/flutterwave.jpg",
        email: "jamespeter@gmail.com",
        date: "new Date().tolocaleDateString()",
        amount: "$120"
    },
    {
        status: 2,
        name: "Amaze Dickson",
        image: "assets/paystack.png",
        email: "Amazeydics@gmail.com",
        date: "new Date().tolocaleDateString()",
         amount: "$170"
    },
    {
        status: 3,
        name: "Sarah Lewy",
        image: "assets/paypal.png",
        email: "sarahlewy98@gmail.com",
        date: "new Date().tolocaleDateString()",
        amount: "$250"
    },
    {
        status: 4,
        name: "Esther Samuel",
        image: "assets/paypal.png",
        email: "esthersamuel123@gmail.com",
        date: "new Date().tolocaleDateString()",
        amount: "$300"
    },
    {
        status: 5,
        name: "Jacob Jermaine",
        image: "assets/profile.png",
        email: "Jacobjermaine@gmail.com",
        date: "new Date().tolocaleDateString()",
        amount: "$170"
    }
];



const shortenTextFormatter = {text, maxLength} => text.length > maxLength ? "..." + text.slice(-maxLength) : text;


// output transaction
transaction.forEach((data) => {
    document.querySelector(".transactions table tbody").insertAdjacentHTML{
        "beforeend",
        <tr>
            <td class="minimize">
                <div class="profile">
                    <img src="${data.image}"/>
                </div>
            </td>
            <td title="${data.name}" class="minimize">${data.name}</td>
            <td class="minimize">${data.date}</td>
            <td title="${data.email}">${shortenTextFormatter(data.email,11)}</td>
            <td title="${data.amount}">${data.amount}</td>
            <td>
                <div class="${status}">${status}</div>
            </td>
        </tr>
    };
});



// Switching theme
const themeSwitch = document.getElementById("theme-switch");
const html = document.firstElementChild;
themeSwitch.onClick = () => {
    html.classList.toggle("dark");
}