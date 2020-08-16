Ext.define('Inventori.store.Lisbulanmasuk', {
    extend: 'Ext.data.Store',
    storeId: 'lisbulanmasuk',
    alias: 'store.lisbulanmasuk',
    //autoLoad: true,
    //autoSync: true,
    fields: [
        'tahun'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apilaporan.php?action=6",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

