import { urlAlphabet, customAlphabet } from "nanoid"

export const generateId = () => {
  const nanoid = customAlphabet(urlAlphabet, 16)
  return nanoid()
}

export const generateKey = (element = "default") => {
  const nanoid = customAlphabet(urlAlphabet, 5)
  return `${element}-${nanoid()}`
}
