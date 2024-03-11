import { Card, List, defaultCard } from '~/pages/Board/type'
export function generatePlaceHolderCard(list: List) {
  const cardPlaceHolder = {
    ...defaultCard,
    _id: `${list._id}-placeHolderCard`,
    list_id: list._id,
    placeHolder: true
  } as Card
  return cardPlaceHolder
}
const generateRandomDateOrNull = (): Date | null => {
  const randomBoolean = Math.random() < 0.5;
  return randomBoolean ? new Date() : null;
};