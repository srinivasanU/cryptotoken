# What is this?
This Encryption and Decryption is done using Cryptojs Library
Get your data Encrypted/Decrypted for your app

# Installation

`npm i tokencrypto --save`

Then...

```
import { tokenEncrypterAES , tokenDecrypterAES , tokenEncrypterDES , tokenDecrypterDES , tokenEncrypterTripleDES , tokenDecrypterTripleDES , tokenEncrypterRabbit , tokenDecrypterRabbit , tokenEncrypterRC4 , tokenDecrypterRC4 , tokenEncrypterRC4Drop , tokenDecrypterRC4Drop } from 'tokencrypto';

tokenEncrypterAES(Data , Secret key)
tokenDecrypterAES(Encrypted Data,Secret key used while encrypting)
tokenEncrypterDES(Data , Secret key)
tokenDecrypterDES(Encrypted Data,Secret key used while encrypting)
tokenEncrypterTripleDES(Data , Secret key)
tokenDecrypterTripleDES(Encrypted Data,Secret key used while encrypting)
tokenEncrypterRabbit(Data , Secret key)
tokenDecrypterRabbit(Encrypted Data,Secret key used while encrypting)
tokenEncrypterRC4(Data , Secret key)
tokenDecrypterRC4(Encrypted Data,Secret key used while encrypting)
tokenEncrypterRC4Drop(Data , Secret key)
tokenDecrypterRC4Drop(Encrypted Data,Secret key used while encrypting)
```

# Options

Encryption and Decryption have these options:

* *tokenEncrypterAES* - _('hello','SECRET_KEY')_ 
* *tokenDecrypterAES* - _('Encrypted_data','SECRET_KEY')_
* *tokenEncrypterDES* - _('hello','SECRET_KEY')_ 
* *tokenDecrypterDES* - _('Encrypted_data','SECRET_KEY')_
* *tokenEncrypterTripleDES* - _('hello','SECRET_KEY')_ 
* *tokenDecrypterTripleDES* - _('Encrypted_data','SECRET_KEY')_
* *tokenEncrypterRabbit* - _('hello','SECRET_KEY')_ 
* *tokenDecrypterRabbit* - _('Encrypted_data','SECRET_KEY')_
* *tokenEncrypterRC4* - _('hello','SECRET_KEY')_ 
* *tokenDecrypterRC4* - _('Encrypted_data','SECRET_KEY')_
* *tokenEncrypterRC4Drop* - _('hello','SECRET_KEY')_ 
* *tokenDecrypterRC4Drop* - _('Encrypted_data','SECRET_KEY')_