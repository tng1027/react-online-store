import faker from "faker"
import { generateId } from "./crypto-helper"
import { addDay, toDayjs } from "./date-helper"

export const DEFAULT_IMAGE_TOPICS = [
  "animals",
  "business",
  "cats",
  "city",
  "food",
  "fashion",
  "sports",
  "nature",
  "technics",
  "transport",
]
export const DEFAULT_COLORS = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
]

export class User {
  logs = []
  user = {}
  hashtags = []

  constructor() {
    this.generateUser()
  }

  generateUser() {
    const user = {
      username: faker.internet.userName().toLocaleLowerCase(),
      emailAddress: faker.internet.email().toLocaleLowerCase(),
      id: generateId(),
      avatar: faker.internet.avatar().toLocaleLowerCase(),
    }

    this.user = user
  }
}

export const generateLogs = _ => {
  const logs = []
  const dailyMaxCount = 10
  const dayCount = 60
  const imageMaxCount = 3
  const hashtagMaxCount = 10

  for (let i = 0; i < dayCount; i++) {
    const dailyCount = faker.datatype.number({ min: 0, max: dailyMaxCount })
    for (let j = 0; j < dailyCount; j++) {
      const hashtagCount = faker.datatype.number({
        min: 0,
        max: hashtagMaxCount,
      })
      const imageCount = faker.datatype.number({ min: 0, max: imageMaxCount })
      const topic =
        DEFAULT_IMAGE_TOPICS[
          faker.datatype.number({
            min: 0,
            max: DEFAULT_IMAGE_TOPICS.length - 1,
          })
        ]
      const log = {
        id: generateId(),
        date: toDayjs(addDay(i * -1))
          .hour(faker.datatype.number({ min: 0, max: 24 }))
          .minute(faker.datatype.number({ min: 0, max: 60 }))
          .second(faker.datatype.number({ min: 0, max: 60 }))
          .toDate(),
        content:
          faker.datatype.number() % 4 === 0
            ? faker.lorem.sentences()
            : faker.lorem.sentence(),
        hashtags: [],
        color:
          DEFAULT_COLORS[
            faker.datatype.number({ min: 0, max: DEFAULT_COLORS.length - 1 })
          ],
        images: [],
      }

      // images
      for (let m = 0; m < imageCount; m++) {
        log.images.push({
          topic,
          imageUrl: `https://source.unsplash.com/random/?${topic},${m}`,
        })
      }

      // hashtags
      for (let h = 0; h < hashtagCount; h++) {
        log.hashtags.push({
          name: faker.lorem.word(),
        })
      }

      logs.push(log)
    }
  }

  return logs
}
