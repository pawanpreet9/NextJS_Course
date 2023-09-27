const DUMMY_DATA =[ {
  id: 'm1',
  title: 'This is first meeetup',
  image:'https://www.shutterstock.com/shutterstock/photos/571989925/display_1500/stock-vector-meetup-concept-illustration-of-young-people-attending-the-professional-workshop-and-brainstorming-571989925.jpg',
  address: 'Meetup street 1',
  description: '  qwefrgrhsdfggd ddfer'
},
{
id: 'm2',
title: 'This is second meeetup',
image:'',
address: 'Meetup street 2',
description: '  qwefrgrhsdfggd ddfer'
}

]
function AllMeetupsPage(){
  return (
    <div>
      AllMeetupsPage
      <section>
        <h1>All Meetups</h1>
        <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key = {meetup.title}>{meetup.title}</li>;

        })}
        </ul>
      </section>
    </div>
   )
}

export default AllMeetupsPage;