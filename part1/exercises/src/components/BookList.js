export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://www.amreading.com/wp-content/uploads/the-very-hungry-caterpillar-e1467570928723.png";
   let book2 = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2Fb%3Fie%3DUTF8%26node%3D17296227011&psig=AOvVaw2I7JlDouaWZk5UWuqDbAyy&ust=1691180599382000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjLi-mowYADFQAAAAAdAAAAABAO";
   let book3 = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkindlepreneur.com%2Fchildrens-book-covers%2F&psig=AOvVaw2I7JlDouaWZk5UWuqDbAyy&ust=1691180599382000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjLi-mowYADFQAAAAAdAAAAABAX";
   
   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Hungry caterpillar" />
         <img src={book2} alt="the door of no return" />
         <img src={book3} alt=" the smart cookie" />
      </div>      
   );
}