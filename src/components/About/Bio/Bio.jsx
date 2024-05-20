import style from "./Bio.module.css"

function Bio() {
  return (
    <div className={style.componentContainer}>
      <div className={style.bothBiosContainer}>
        <div className={style.nAndLContainer}>
            
            <p className="text-5xl border-b-4 ml-4 m my-20">About Natasha Mason & Lori Liao</p>
            <p className="ml-6">Natasha met her best friend Lori when they both enrolled in the same esthetician school. 
                They quickly realized they had a lot in common, especially the dream of opening their 
                own beauty and skincare salon. After much hard-word, determination, and love, fast-forward 
                ten years, the two professionals in beauty and wellness opened Beauty On Park together in February of 2024.</p>
            <br/>
                <p className="ml-6">Natasha is a proud mother of twins, and loves to teach her daughter and son the importance of wellness inside and out. Having her children see the hard work she puts into her business is important to her which is why she had created a free service at Beauty On Park where children of salon guests are invited to wait for their parent in the kid center, a room with a profesional caregiver where children can work on crafts.</p>
            <br/>
                <p className="ml-6">Lori has traveled all over the world because her parents were both in the military. 
                She loved the experience of living in so many parts of the world and learning the beauty secrets from different cultures.
                Lori is in the works of creating an online platform where people from all over the world can share products, trends, and beauty secrets from their culture and part of the globe which is scheduled to debut Fall of 2024.</p>
        </div>
      </div>
    </div>
  )
}

export default Bio
