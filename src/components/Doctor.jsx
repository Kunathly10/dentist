import Card from '../UI/Card'


const Doctor = ({image, name, job, socials}) => {
  return (
    <Card className="doctor">
        <div className="doctor__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="doctor__socials">
            {
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target="_blank" rel='noreffer noopener'>{icon}</a>
                })
            }
        </div>
    </Card>
  )
}

export default Doctor