module.exports = {
    checkout: {
        instalments: [
            {
                instalment: 0,
                payment_methods: [{
                    type: 'alt',
                    id: 'btc'
                }]
            },
            {
                instalment: 1,
                payment_methods: [
                    {
                        type: 'cc',
                        id: 'visa'
                    },
                    {
                        type: 'cc',
                        id: 'american-express'
                    }
                ]
            },
            {
                instalment: 2,
                interest: true,
                payment_methods: [
                    {
                        type: 'cc',
                        id: 'visa',
                        interest: 15
                    },
                    {
                        type: 'cc',
                        id: 'american-express',
                        interest: 15
                    }
                ]
            }
        ],
        price: {
            total: 1000,
            currency: '$',
            detail: {
                from: 'EZE',
                to: 'LAX'
            }
        }
    }
}
