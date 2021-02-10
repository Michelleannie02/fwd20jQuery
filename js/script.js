$(()=>{
    // const headline = $('h1');
    // headline.remove();
    // console.log(headline);
    const main = $('#main');
    const pl2 = $('.pl-2');
    console.log(main, pl2);

    let myShinyNewDiv = $('<div class="w-full md:w-1/2 xl:w-1/3 p-6">');
    myShinyNewDiv.html('<div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5"><ul><li>item</li><li class="secret">item</li><li>item</li></ul>');
    $('#content').append(myShinyNewDiv);

    $('#content ul li').each((index, liElement) => {
        $(liElement).append(`<span> number ${index}</span>`);
    });

    $('#content ul li').on('click', function() {
        $(this).addClass('uppercase')
        .find('span')
        .attr('title', 'hoovering list item');
    });

    const listItems = $('#content ul li');
    const secretListItem = $(listItems).filter('.secret');
    const notSecretListItems = $(listItems).not('.secret');
    const firstListItem = $(listItems).first();
    const nextListItem = $(firstListItem).next();
    const prevListItem = $(nextListItem).prev();
    console.log(prevListItem);

});