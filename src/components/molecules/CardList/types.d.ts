
export interface ICardListProps {
    items: T[];
    renderItem: (item: T) => ReactNode;
}