export const mainFormVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const itemFormVariant = {
  hidden: {
    opacity: 0,
    translateY: -20
  },
  visible: {
    opacity: 1,
    translateY: 0
  }
}
