import express from 'express'

// создание сервера Express
const app = express()

// теперь express может отправлят *.ejs файлы к клиенту
app.set('view engine', 'ejs')
app.set('views', 'D:\\IT\\Node js\\24\\views')

app.use(express.static('storage'))

let news_content = "With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon"

let arr = [
    {
        title: "Спорт",
        content: "КР победил на олимписких играх",
        category: "sport"
    },
    {
        title: "Презедент КР",
        content: "Садыр Жапаров стал чемпионом по боксу",
        category: "kyrgyz"
    },
    {
        title: "Apple",
        content: "Выпустили айфон 14",
        category: "tech"
    },
    {
        title: "Студент",
        content: "Малалетка открыл бизнес",
        category: "business"
    },

    {
        title: "Школьники",
        content: "Малалетки открыли IT компанию ",
        category: "business"
    },

    {
        title: "Экономика",
        content: "Экономика КР выросла на 40%",
        category: "economy"
    },
    {
        title: "Экономика",
        content: "Экономика КР выросла на 40% потому что кумтор работает на пользу КР",
        category: "economy"
    },
    {
        title: "Общество КР",
        content: "Растет",
        category: "society"
    }

]

// главная страница

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/news/:category', function (req, res) {
    let category = req.params.category
    let content = news_content
    let title = ''

    for(let i = 0; i < arr.length; i++){
        if (category === arr[i].category) {
            content =arr[i].content
            title = arr[i].title
        }
    }
    res.render('news', {
        category: category,
        content: content,
        title:title,
        arr: arr
    })
})

app.get('/users/:users', function (req, res) {
    let users = req.params.users
    console.log(users)
    res.render('users')
})

app.listen(3000)
console.log('Сервер запущен на 3000 порту')


