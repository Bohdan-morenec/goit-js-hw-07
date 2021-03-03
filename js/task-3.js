const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const listRef = document.querySelector('#gallery')
listRef.classList.add('photo')


const enumerationOfAttributesRef = images.map(item => {
    const liRef = document.createElement('li')
    const photo = document.createElement('img')

    liRef.append(photo)

    photo.src = item.url
    photo.alt = item.alt
    photo.width = 600
    photo.height = 600
    return liRef
})

listRef.append(...enumerationOfAttributesRef)

