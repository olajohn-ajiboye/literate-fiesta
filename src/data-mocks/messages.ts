const messagesList = [
    {
        id: 0,
        text: "lorem ipsum 1",
        canDelete: false,
        btcAmount: 0.000556,
        messageType: "single",
        messageContent: "message content 1",
    },
    {
        id: 1,
        text: "lorem ipsum 2",
        canDelete: true,
        btcAmount: 0.0026,
        messageType: "single",
        messageContent: "message content 2",
    },
    {
        id: 2,
        text: "lorem ipsum 3",
        canDelete: true,
        btcAmount: 0.0087,
        messageType: "single",
        messageContent: "message content 3",
    },
    {
        id: 3,
        text: "lorem ipsum 4",
        canDelete: false,
        btcAmount: 0.034556,
        messageType: "single",
        messageContent: "message content 4",
    },
    {
        id: 4,
        text: "lorem ipsum 5",
        canDelete: true,
        btcAmount: 0.004656,
        messageType: "single",
        messageContent: "message content 5",
    },
    {
        id: 5,
        text: "lorem ipsum 6",
        canDelete: false,
        btcAmount: 0.7663,
        messageContent: [
            { source: "source1", amount: 0.00443 },
            { source: "source2", amount: 0.0366 },
            { source: "source3", amount: 0.1874 },
        ],
        messageType: "multiple",
    },
    {
        id: 6,
        text: "lorem ipsum 7",
        canDelete: true,
        btcAmount: 0.00764,
        messageContent: [
            { source: "source1", amount: 0.355 },
            { source: "source2", amount: 0.8451 },
            { source: "source3", amount: 0.00123 },
        ],
        messageType: "multiple",
    },
    {
        id: 7,
        text: "lorem ipsum 8",
        canDelete: false,
        btcAmount: 0.887711,
        messageContent: [
            { source: "source1", amount: 0.0043 },
            { source: "source2", amount: 0.9983 },
            { source: "source3", amount: 0.764 },
        ],
        messageType: "multiple",
    },
];

export const messageToInsert = {
    text: "New custom message",
    canDelete: true,
    messageType: "custom",
    messageContent: "This is only service message",
};

export const shuffledMessageList = [...messagesList].sort(() => Math.random() - 0.5);
