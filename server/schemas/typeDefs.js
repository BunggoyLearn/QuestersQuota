const typeDefs = `
  type Character {
    _id: ID
    name: String!
    healthPoints: Int!
    maxHealthPoints: Int!
    manaPoints: Int!
    maxManaPoints: Int!
    goldPieces: Int!
    isNPC: Boolean
    environment: String
    npcAmount: Int
    status: [Status]
    alive: Boolean
    holding: [holding]
    quirks: [String]

  }

  type Status {
    blinded: Boolean
    charmed: Boolean
    deafened: Boolean
    exhaustion: Boolean
    frightened: Boolean
    grappled: Boolean
    incapacitated: Boolean
    invisible: Boolean
    paralyzed: Boolean
    petrified: Boolean
    poisoned: Boolean
    prone: Boolean
    restrained: Boolean
    stunned: Boolean
    unconcious: Boolean
  }

  type holding {
    heldItem: [heldItem]
  }

  type heldItem {
    item: String
    description: String
  }

  type Environment {
    _id: ID
    name: String
    terrain: String
    weather: String
    environmentFactor: String
    town: String
    NPCs: [Character]
  }

  type Query {
    characters: [Character]
    environments: [Environment]
  }
`;

module.exports = typeDefs;