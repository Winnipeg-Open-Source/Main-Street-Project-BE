import { LINE_ITEMS_COLLECTION } from 'constants/collections';
import { create, update, get, getAll } from 'utils/firebase';

export const createLineItems = async (donationId, lineItems) => {
    return await Promise.all(lineItems.map(async (lineItem) => {
        const data = {
            donation_id: donationId,
            ...lineItem,
        };
        return await create(LINE_ITEMS_COLLECTION, data);
    }));
};

export const reduceLineItems = async (lineItems) => {
    return await Promise.all(lineItems.map(async ({ id, quantity }) => {
        const lineItem = await get(LINE_ITEMS_COLLECTION, id);
        const newQuantity = lineItem.quantity - quantity > 0 ? lineItem.quantity - quantity : 0;
        return await update(LINE_ITEMS_COLLECTION, id, { 'quantity': newQuantity });
    }));
};

export const getLineItemsByIds = async (ids) => {
    const filters = [
        {
            key: 'id',
            check: 'in',
            value: ids,
        },
    ];
    return await getAll(LINE_ITEMS_COLLECTION, filters);
};

export const getLineItemsByItemId = async (itemId) => {
    const filters = [
        {
            key: 'item_id',
            check: '==',
            value: itemId,
        },
    ];
    return await getAll(LINE_ITEMS_COLLECTION, filters);
};
