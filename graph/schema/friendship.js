export default `

type Friendship implements Node {
  id: ID!
  user1_id: ID!
  user2_id: ID!
}

type Friend {
  friendship_id: ID!
  friend: User!
}

input FriendshipCreationInput {
  user1_id: ID!
  user2_id: ID!
}

`
