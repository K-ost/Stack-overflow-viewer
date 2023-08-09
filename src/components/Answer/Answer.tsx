import { AnswerType } from "../../types"

interface IAnswer {
  el: AnswerType
}

const Answer: React.FC<IAnswer> = ({ el }) => {
  return (
    <div className="reply">
      <div className="reply-img">
        <a href={el.owner.link} target="_blank"><img src={el.owner.profile_image} alt="" /></a>
      </div>
      <div className="reply-content">
        <div className="reply-name">
          <a href={el.owner.link} target="_blank">{el.owner.display_name}</a>
        </div>
        <div className="reply-date">{el.creation_date}</div>
        <div dangerouslySetInnerHTML={{__html: el.body}}></div>
      </div>
    </div>
  )
}

export default Answer
