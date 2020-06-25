import models from '../models';

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'ajithpmohan',
  });

  const user2 = new models.User({
    username: 'regipmohan',
  });

  const message1 = new models.Message({
    text: 'Developed Node with Express + MongoDB Server',
    user: user1.id,
  });

  const message2 = new models.Message({
    text: 'Developed Node with Express + PostgreSQL Server',
    user: user2.id,
  });

  await message1.save();
  await message2.save();

  await user1.save();
  await user2.save();
};

export default createUsersWithMessages;
