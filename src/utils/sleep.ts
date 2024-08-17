/* eslint-disable no-promise-executor-return */
/* eslint-disable no-await-in-loop */

const TIME_TYPING = 1320

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const imitationOfLoading = async () => {
  for (let i = 0; i < 2; i++) {
    await sleep(i * TIME_TYPING)
  }
}
