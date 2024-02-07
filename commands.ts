export const commands = [
  {
    name: 'aprovar',
    default_member_permissions: '268435456',
    description: 'Aprova um usuário na Allowlist',
    options: [
      {
        type: 3,
        name: 'user',
        description: 'ID do usuário a ser aprovado',
        required: true,
      }
    ]
  },
  {
    name: 'recusar',
    default_member_permissions: '268435456',
    description: 'Recusar um usuário da Allowlist',
    options: [
      {
        type: 3,
        name: 'user',
        description: 'ID do usuário a ser reprovado',
        required: true,
      }
    ]
  }
]
