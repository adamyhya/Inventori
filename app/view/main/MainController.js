/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Inventori.view.main.MainController', {
    extend: 'Ext.app.ViewController',


    alias: 'controller.main',

    onPencet: function (sender, record) {
        Ext.Msg.confirm('Peringatan!!', 'Apakah Anda Yakin Ingin Keluar?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            localStorage.clear();
            window.location.reload();
        }
    },
        
    
    
    carik: function(){
    Ext.Viewport.add(Ext.create('Inventori.view.main.barang.Barang'));
    },
    
    addUser: function(){
    uname = Ext.getCmp('uname').getValue();
    pwd = Ext.getCmp('pwd').getValue();
    nama = Ext.getCmp('namaus').getValue();
    akses = Ext.getCmp('akses').getValue();
    kontak = Ext.getCmp('kontak').getValue();
    id_pengguna = localStorage.getItem('id_user');
    store = Ext.getStore('lisuser');
    store.beginUpdate();
    store.insert(0, {'uname': uname, 'pwd': pwd, 'nama_user': nama, 'akses': akses, 'kontak': kontak, 'id_user1': id_pengguna});
    store.endUpdate();
    store.load();
    alert("Inserting..");
    Ext.getCmp('tuserfrm').reset();
    },
    editUser: function(){ //err
    idu = Ext.getCmp('id_user').getValue();
    uname = Ext.getCmp('unamee').getValue();
    pwd = Ext.getCmp('pwde').getValue();
    nama = Ext.getCmp('namause').getValue();
    akses = Ext.getCmp('aksese').getValue();
    kontak = Ext.getCmp('kontake').getValue();
    id_pengguna = localStorage.getItem('id_user');
    store = Ext.getStore('lisuser');
    record = idu;
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_user', idu);
    record.set('uname', uname);
    record.set('pwd', pwd);
    record.set('nama_user', nama);
    record.set('akses', akses);
    record.set('kontak', kontak);
    record.set('id_user1', id_pengguna);
    store.endUpdate();
    store.load();
    alert("Updatting..");
    },
    editUser1: function(){
    idu = Ext.getCmp('id_user1').getValue();
    uname = Ext.getCmp('unamee1').getValue();
    pwd = Ext.getCmp('pwde1').getValue();
    nama = Ext.getCmp('namause1').getValue();
    akses = Ext.getCmp('aksese1').getValue();
    kontak = Ext.getCmp('kontake1').getValue();
    id_pengguna = localStorage.getItem('id_user');
    store = Ext.getStore('lisuser');
    record = Ext.getCmp('luser').getSelection();
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_user', idu);
    record.set('uname', uname);
    record.set('pwd', pwd);
    record.set('nama_user', nama);
    record.set('akses', akses);
    record.set('kontak', kontak);
    record.set('id_user1', id_pengguna);
    store.endUpdate();
    store.load();
    alert("Updatting..");
    },
    addJurusan: function(){
    nama_jurusan = Ext.getCmp('namajur').getValue();
    id_pengguna = localStorage.getItem('id_user');
    store = Ext.getStore('lisjurusan');
    store.beginUpdate();
    store.insert(0, {'nama_jurusan': nama_jurusan,'id_user': id_pengguna});
    store.endUpdate();
    store.load();
    alert("Inserting..");
    Ext.getCmp('tjurusanfrm').reset();
    },
    editJurusan: function(){
       id_jurusan = Ext.getCmp('id_jurusane').getValue();
       nama_jurusan = Ext.getCmp('nama_jurusane').getValue();
       old_nama_jurusan = Ext.getCmp('old_namaj').getValue();
       id_pengguna = localStorage.getItem('id_user');
       store = Ext.getStore('lisjurusan');
       record = Ext.getCmp('ljurusan').getSelection();
       index = store.indexOf(record);
       record = store.getAt(index);
       store.beginUpdate();
       record.set('id_jurusan',id_jurusan);
       record.set('nama_jurusan',nama_jurusan);
       record.set('old_nama_jurusan',old_nama_jurusan);
       record.set('id_user',id_pengguna);
       store.endUpdate();
       store.load();
       alert("Updatting..");   
    },
    addSatuan: function(){
    nama_satuan = Ext.getCmp('namasa').getValue();
    id_pengguna = localStorage.getItem('id_user');
    store = Ext.getStore('lissatuan');
    store.beginUpdate();
    store.insert(0, {'nama_satuan': nama_satuan, 'id_user': id_pengguna});
    store.endUpdate();
    store.load();
    alert("Inserting..");
    Ext.getCmp('tsatuanfrm').reset();
    },
    editSatuan: function(){
       id_satuan = Ext.getCmp('id_satuane').getValue();
       nama_satuan = Ext.getCmp('nama_satuane').getValue();
       old_nama_satuan = Ext.getCmp('old_namas').getValue();
       id_pengguna = localStorage.getItem('id_user');
       store = Ext.getStore('lissatuan');
       record = Ext.getCmp('lsatuan').getSelection();
       index = store.indexOf(record);
       record = store.getAt(index);
       store.beginUpdate();
       record.set('id_satuan',id_satuan);
       record.set('nama_satuan',nama_satuan);
       record.set('old_nama_satuan',old_nama_satuan);
       record.set('id_user',id_pengguna);
       store.endUpdate();
       store.load();
       alert("Updatting..");   
    },
    addKategori: function(){
    nama_kategori = Ext.getCmp('namaka').getValue();
    id_pengguna = localStorage.getItem('id_user');
    store = Ext.getStore('liskategori');
    store.beginUpdate();
    store.insert(0, {'nama_kategori': nama_kategori, 'id_user': id_pengguna});
    store.endUpdate();
    store.load();
    alert("Inserting..");
    Ext.getCmp('tkategorifrm').reset();
    },
    editKategori: function(){
       id_kategori = Ext.getCmp('id_kategorie').getValue();
       nama_kategori = Ext.getCmp('nama_kategorie').getValue();
       old_nama_kategori = Ext.getCmp('old_nama_kategori').getValue();
       id_pengguna = localStorage.getItem('id_user');
       store = Ext.getStore('liskategori');
       record = Ext.getCmp('lkategori').getSelection();
       index = store.indexOf(record);
       record = store.getAt(index);
       store.beginUpdate();
       record.set('id_kategori',id_kategori);
       record.set('nama_kategori',nama_kategori);
       record.set('old_nama_kategori',old_nama_kategori);
       record.set('id_user',id_pengguna);
       store.endUpdate();
       store.load();
       alert("Updatting..");   
    },

    addBarang: function(){
    id_kategori = Ext.getCmp('namakat').getValue();
    id_satuan = Ext.getCmp('namas').getValue();
    nama_barang = Ext.getCmp('namab').getValue();
    jumlah_barang = Ext.getCmp('jumlahb').getValue();
    id_pengguna = localStorage.getItem('id_user');
    store = Ext.getStore('lisbarang');
    store.beginUpdate();
    store.insert(0, {'id_kategori':id_kategori, 'id_satuan':id_satuan, 'nama_barang': nama_barang, 'jumlah_barang':jumlah_barang, 'id_user':id_pengguna});
    store.endUpdate();
    store.load();
    Ext.getStore('lisbarang1').load();
    Ext.getStore('lisbarang2').load();
    alert("Inserting..");
    Ext.getCmp('ext-gridcolumn-3').setText('Nama Barang ' + '<b>( Total : ' + Ext.getStore('lisbarang').count() + ' )</b>');
    Ext.getCmp('tbarangfrm').reset();
    },
    editBarang: function(){
    id_barang = Ext.getCmp('idbar').getValue();    
    id_kategori = Ext.getCmp('namaekat').getValue();
    id_satuan = Ext.getCmp('namaes').getValue();
    nama_barang = Ext.getCmp('namaeb').getValue();
    oldnb = Ext.getCmp('oldnamaeb').getValue();
    jumlah_barang = Ext.getCmp('jumlaheb').getValue();
    old_jumlah_barang = Ext.getCmp('oldjumlaheb').getValue();
    id_pengguna = localStorage.getItem('id_user');
    store = Ext.getStore('lisbarang');
    record = Ext.getCmp('lbarang').getSelection();
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_barang',id_barang);
    record.set('nama_barang',nama_barang);
    record.set('old_nama_barang',oldnb);
    record.set('jumlah_barang',jumlah_barang);
    record.set('old_jumlah_barang',old_jumlah_barang);
    record.set('id_kategori',id_kategori);
    record.set('id_satuan',id_satuan);
    record.set('id_user',id_pengguna);
    store.endUpdate();
    store.load();
    Ext.getStore('lismasuk').load();
    Ext.getStore('liskeluar').load();
    Ext.getStore('lisbarang1').load();
    Ext.getStore('lisbarang2').load();
    alert("Updatting..");
    
    },

    addMasuk: function(){
        id_barang = Ext.getCmp('id_barang').getValue();
        nama_barang = Ext.getCmp('namam').getValue();
        jumlah_barang = Ext.getCmp('jumlahm').getValue();
        keterangan = Ext.getCmp('keterangan').getValue();
        id_jurusan = Ext.getCmp('jurusanm').getValue();
        id_pengguna = localStorage.getItem('id_user');
        store = Ext.getStore('lismasuk');
        store.beginUpdate();
        store.insert(0, {'id_barang': id_barang , 'nama_barang': nama_barang, 'jumlah_barang_masuk': jumlah_barang, 'keterangan': keterangan, 'id_jurusan': id_jurusan, 'id_pengguna': id_pengguna, 'id_user': id_pengguna});
        store.endUpdate();
        store.load();
        alert("Inserting..");
        Ext.getCmp('ext-gridcolumn-10').setText('Nama Barang ' + '<b>( Total : ' + Ext.getStore('lismasuk').count() + ' )</b>');
        Ext.getStore('lisbarang2').clearFilter();
        Ext.getStore('lisbarang1').load();
        Ext.getStore('lisbarang2').load();
        Ext.getStore('lisbarang').load();
        Ext.getCmp('ok').setDisabled(true);
        
          
    },
    editMasuk: function(){
        id_barang_masuk = Ext.getCmp('id_brg_masuk').getValue();
        id_barang = Ext.getCmp('id_barangm').getValue();
        jumlah = Ext.getCmp('jumlah_masuk').getValue();
        ket = Ext.getCmp('ket_brgmasuk').getValue();
        jur = Ext.getCmp('nama_jurusan_masuk').getValue();
       store = Ext.getStore('lismasuk');
    record = Ext.getCmp('lmasuk').getSelection();
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_brg_masuk',id_barang_masuk);
    record.set('id_barang',id_barang);
    record.set('jumlah_barang_masuk',jumlah);
    record.set('id_jurusan',jur);
    record.set('keterangan',ket);
    store.endUpdate();
    store.load();
    alert("Updatting..");     
    },

    addkeluar: function(){
        id_barang = Ext.getCmp('id_barang1').getValue();
        nama_barang = Ext.getCmp('namak').getValue();
        jumlah_barang = Ext.getCmp('jumlahk').getValue();
        keterangan = Ext.getCmp('keterangan1').getValue();
        id_jurusan = Ext.getCmp('jurusank').getValue();
        id_pengguna = localStorage.getItem('id_user');
        store = Ext.getStore('liskeluar');
        store.beginUpdate();
        store.insert(0, {'id_barang': id_barang , 'nama_barang': nama_barang, 'jumlah_barang_keluar': jumlah_barang, 'keterangan': keterangan, 'id_jurusan': id_jurusan, 'id_pengguna' : id_pengguna, 'id_user': id_pengguna});
        store.endUpdate();
        store.load();
        alert("Inserting..");
        Ext.getCmp('ok1').setDisabled(true);
        Ext.getStore('lisbarang1').clearFilter();
        Ext.getStore('lisbarang2').load();
        Ext.getStore('lisbarang1').load();
        Ext.getStore('lisbarang').load();
        Ext.getCmp('ext-gridcolumn-22').setText('Nama Barang ' + '<b>( Total : ' + Ext.getStore('liskeluar').count() + ' )</b>');
    },
    editKeluar: function(){
    id_barang_keluar = Ext.getCmp('id_brg_keluar').getValue();
    id_barang = Ext.getCmp('id_barangk').getValue();
    jumlah = Ext.getCmp('jumlah_keluar').getValue();
    ket = Ext.getCmp('ket_brgkeluar').getValue();
    jur = Ext.getCmp('nama_jurusan_keluar').getValue();
    store = Ext.getStore('liskeluar');
    record = Ext.getCmp('lkeluar').getSelection();
    index = store.indexOf(record);
    record = store.getAt(index);
    store.beginUpdate();
    record.set('id_brg_keluar',id_barang_keluar);
    record.set('id_barang',id_barang);
    record.set('jumlah_barang_keluar',jumlah);
    record.set('id_jurusan',jur);
    record.set('keterangan',ket);
    store.endUpdate();
    alert("Updatting..");     
    store.load();

    },

    printmasuk: function() {
         var url = 'http://localhost/inventaris/printlaporan.php?action=1&tahun=' + Ext.getCmp('tahun1').getValue();
    Ext.Ajax.request({
        url: url,
        method: 'GET',
        autoAbort: false,
        success: function(result) {
            if(result.status == 204) {
                Ext.Msg.alert('Empty Report', 'There is no data');
            } else if(result.status == 200) {
                Ext.DomHelper.append(Ext.getBody(), {
                    tag:          'iframe',
                    frameBorder:  0,
                    width:        0,
                    height:       0,
                    css:          'display:none;visibility:hidden;height:0px;',
                    src:          url
                });
            }
        },
        failure: function() {
            // failure action
        }
    });
    },
    printkeluar: function() {
         var url = 'http://localhost/inventaris/printlaporan.php?action=2&tahun=' + Ext.getCmp('tahun').getValue();
    Ext.Ajax.request({
        url: url,
        method: 'GET',
        autoAbort: false,
        success: function(result) {
            if(result.status == 204) {
                Ext.Msg.alert('Empty Report', 'There is no data');
            } else if(result.status == 200) {
                Ext.DomHelper.append(Ext.getBody(), {
                    tag:          'iframe',
                    frameBorder:  0,
                    width:        0,
                    height:       0,
                    css:          'display:none;visibility:hidden;height:0px;',
                    src:          url
                });
            }
        },
        failure: function() {
            // failure action
        }
    });
    },
    logins: function() {
        uname1 = Ext.getCmp('uname').getValue();
        pwd1 = Ext.getCmp('pwd').getValue();
        store = Ext.getStore('auth');
        store.proxy.extraParams = { uname : uname1, pwd : pwd1 };
      form = this.getView();
        store.load(function (records, operation, success) {
      
      var myObj = records[0].data;
      //console.log(records[0].data);
      
      if (success) {
        try {
            Ext.toast('Selamat Datang ' + myObj.nama_user); 
            localStorage.setItem("id_user", myObj.id_user);
            localStorage.setItem("uname", myObj.uname);
            localStorage.setItem("pwd", pwd1);
            localStorage.setItem("akses", myObj.akses);
            localStorage.setItem("nama_user", myObj.nama_user);
            localStorage.setItem("kontak", myObj.kontak);
            localStorage.setItem("tgl_buat", myObj.tgl_buat);
            localStorage.setItem("LoggedIn", true);
            form.destroy();
            //Ext.Viewport.add(Ext.create('Inventori.view.main.Main'));
         Ext.getCmp('id_user1').setValue(localStorage.getItem('id_user'));
         Ext.getCmp('namause1').setValue(localStorage.getItem('nama_user'));
         Ext.getCmp('unamee1').setValue(localStorage.getItem('uname'));
         Ext.getCmp('pwde1').setValue(localStorage.getItem('pwd'));
         Ext.getCmp('aksese1').setValue(localStorage.getItem('akses'));
         Ext.getCmp('kontake1').setValue(localStorage.getItem('kontak'));
        window.location.reload();

        } catch (error) {
          Ext.toast('The username/password provided invalid.');
          console.log(error);
        }
      } else {
        Ext.toast('The username/password provided invalid.');
      }
    })

        // Add the main view to the viewport
       

    }
});
