import { FC } from "react"
import styles from "./Button.module.scss"



interface IButton {
    text: string
    color?: string
    background?: string
    uppercase?: boolean 
    padding?: string  
    width?: string
}

const Button: FC<IButton> = ({
    text,
    color="black",
    background="white",
    uppercase=true,
    padding,
    width
}) => {
  const buttonStyles: React.CSSProperties = {
      color: color,
      backgroundColor: background,
      textTransform: uppercase ? "uppercase" : "none",
      padding,
      width
  }

  return (
    <div className={styles.button} style={buttonStyles}>
      {text}
    </div>
  )
}

export default Button

Button.propTypes = {
  
}

Button.defaultProps = {

}