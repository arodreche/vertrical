import { Wand } from '@entity/wand';

export const getAllWands = async () => {  
  try {
    return await Wand.find();
  } catch (e) {
    console.error(e);
  }
}

export const createWand = async ({ title, image, description, shortDescription }: { title: string, image: string, description: string, shortDescription: string }) => {
  try {
    const _newWand = new Wand();
    _newWand['title'] = title;
    _newWand['image'] = image;
    _newWand['description'] = description;
    _newWand['shortDescription'] = shortDescription;
    await _newWand.save();

    return await Wand.findOne({
      where: { title: title }
    });

  } catch (e) {
    console.error(e);
  }
}

// export const loadWands = async (wands : any[]) => {
//   await Promise.all(wands.map(async (wand : any) => {
//     createWand(wand);
//   }));

//   return wands;
// }
export const loadWands = async (wands : any[]) => {    
  console.log('SERVICE - wands[0] =', wands[0]);
  await Promise.all(wands.map(async (wand : any) => {
    try {
      const _new = new Wand();
      _new['title'] = wand.title;
      _new['image'] = wand.image;
      _new['description'] = wand.description;
      _new['shortDescription'] = wand.shortDescription;
      return await _new.save();
    } catch (e) {
      console.error(e);
    }
  }));
}

export const updateWand = async ({ id, title, image, description, shortDescription }: { id: number, title: string, image: string, description: string, shortDescription: string }) => {
  try {
    const _updatedWand = await Wand.findOne({ where: { id } });
    if (!_updatedWand) return { message: "Wand is not found!" };
    _updatedWand['title'] = title;
    _updatedWand['image'] = image;
    _updatedWand['description'] = description;
    _updatedWand['shortDescription'] = shortDescription;
    
    await _updatedWand.save();

    return await Wand.findOne({
      where: { title: title }
    });

  } catch (e) {
    console.error(e);
  }
}

export const deleteWand = async ({ id }: { id: number }) => {
  try {
    console.log('Wand id =', id);
    
    const foundWand = await Wand.findOne({ id: id });
    return await foundWand?.remove();
  } catch (e) {
    console.error(e);
  }
}