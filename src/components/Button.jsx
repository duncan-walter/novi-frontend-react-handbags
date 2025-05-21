function Button({buttonText, action, isDisabled = false}) {
  return (
    <button
      onClick={action}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  )
}

export default Button;