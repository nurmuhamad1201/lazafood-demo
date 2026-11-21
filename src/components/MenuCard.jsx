export default function MenuCard({ title, price, imageUrl }) {
  return (
    <div className="card">
      <img 
        src={imageUrl} 
        alt={title} 
        style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
      />
      <h3>{title}</h3>
      <div className="price">{price}</div>
    </div>
  );
}