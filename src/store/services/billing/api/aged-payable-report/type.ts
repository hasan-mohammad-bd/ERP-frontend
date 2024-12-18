export interface AgedPayableDataType {
  name: string; // Name of the customer or entity
  current: number; // Amount due currently
  one_to_thirty: number; // Amount due for 1 to 30 days
  thirty_to_sixty: number; // Amount due for 30 to 60 days
  sixty_to_ninety: number; // Amount due for 60 to 90 days
  more_than_ninety: number; // Amount due for more than 90 days
  total_due: string; // Total due amount as a string
}
