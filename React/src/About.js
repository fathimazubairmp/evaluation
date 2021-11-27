import './App.css';

function About()
{
    var about={
        backgroundColor:'rgba(44, 62, 80, 0.7)'
    }
    var h1={
        textAlign:'center',
        color:'cadetblue',
        marginBottom:'70'
    }
    return(<><h1 style={h1}>About Us</h1>
    <p style={about}>
    Innumerable books are divided under various categories like action & adventure, business & economics, comics & mangas, crime, thriller & mystery, fiction, humour, and romance. You can browse by genre when you buy online making it more convenient for you to narrow down your choices. Then there are biographies and true accounts bestsellers as well. These books are available in different formats like hardcover, paperback, and board book.
Gone are the days, when books were always hand-held. In this digital age, there are Kindle eBooks which you can read on your Amazon Kindle. Some selected range of free eBooks are present if you want to download them on to your device. Apart from that, there are audiobooks, which can be used by those who prefer listening to reading. This is especially helpful for students who want to listen to recorded lectures by reputed professors, and also to those who can’t read.
When you shop online, there are hot pre-orders. You can easily secure that book you’ve always wanted to read, as the book will be delivered at your doorstep soon after its official release. You also have easy access to most of the new arrivals, with book descriptions that help you get an idea about the book without spoilers.
You can also use the Search Inside!™ feature to look inside the book and browse through a few pages of the book.
    </p>
    </>)
}

export default About;
