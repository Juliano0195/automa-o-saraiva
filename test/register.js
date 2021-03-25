var webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();


describe( 'Test Register-saraiva' ,  function(){
  this.timeout(5000);

    before(  function(){
        driver.get("https://www.saraiva.com.br​");
        driver.manage().window().maximize();
        
       });

    it( 'Test Case # 1- CLick no botão "Entre ou cadastre-se"', function(){
      
      driver.wait(until.elementLocated(By.xpath('//*[@id="link-account"]/span')), 5000).then(function(){
        var loginButton = driver.findElement(By.xpath('//*[@id="link-account"]/span'));
        loginButton.click();
      });

      driver.wait(until.elementLocated(By.id("vtexIdUI-saraiva-oauth")), 5000).then(function(){
        var registerButton = driver.findElement(By.id("vtexIdUI-saraiva-oauth"));
        registerButton.click();
      });
      
      driver.get("https://login.saraiva.com.br/authorization_code?clientId=authorization_code&redirect_uri=https%3A%2F%2Fvtexid.vtex.com.br%2FVtexIdAuthSiteKnockout%2FReceiveAuthorizationCode.ashx&state=eyJhbGciOiJFUzI1NiIsImtpZCI6IkVCRkFCQUYwNTVDNUE5MDQ1RTY4Qjg2MDQxQjVFNkZCNzBBNDBBNzEiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiI1QjREQURERkE1MkE4QzQ4MTYxNjFBNUVEQzc1QUU2QjVCRTk1MUE2NDM2NTVFMzhERDZCRjNGRDlERDhDREE0IiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImV4cCI6MTYxNjQzODU5NSwicHJvdmlkZXIiOiJDbGllbnRlIFNhcmFpdmEiLCJpYXQiOjE2MTY0Mzc5OTUsImp0aSI6IjBhZTgzMDI0LTE3NzYtNGEzYi1hODY0LWNlNWNhNmU0YTczNiJ9.I_aDLuV1k-8SlOOObqePdqvNdBBUfh7qznbgNwmejlWT1qAVHzU4XnSHoN6FM51WHxCAPTbIxB2rDX4yXcrEFQ")
      driver.manage().window().maximize();
      driver.wait(until.elementLocated(By.xpath("//a[normalize-space()='CADASTRAR']")), 5000).then(function(){
        var registerButton2 = driver.findElement(By.xpath("//a[normalize-space()='CADASTRAR']"));
        registerButton2.click();
      });
    });
    it( 'Test Case # 2- Preencher campos do formulário', function(){
      driver.sleep(5000);

      driver.wait(until.elementLocated(By.name('InputNome1')), 50000).then(function(){
          var userName = driver.findElement(By.name('InputNome1'));
          userName.click();
          userName.sendKeys('TESTE JULIANO');
      });

      driver.wait(until.elementLocated(By.name('InputSobrenome1')), 50000).then(function(){
        var surName = driver.findElement(By.name('InputSobrenome1'));
        surName.click();
        surName.sendKeys('VITTA');
      });

      driver.wait(until.elementLocated(By.name('InputEmail1')), 50000).then(function(){
        var email = driver.findElement(By.name('InputEmail1'));
        email.click();
        email.sendKeys('teste.oc@mailinator.com');
      });

      driver.wait(until.elementLocated(By.name('InputSenha1')), 50000).then(function(){
        var password = driver.findElement(By.name('InputSenha1'));
        password.click();
        password.sendKeys('Teste123*');
      });

      driver.wait(until.elementLocated(By.name('InputConfirmeSenha1')), 50000).then(function(){
        var passwordConfirmed = driver.findElement(By.name('InputConfirmeSenha1'));
        passwordConfirmed.click();
        passwordConfirmed.sendKeys('Teste123*');
      });

      driver.wait(until.elementLocated(By.name('InputCpf1')), 50000).then(function(){
        var typeDocument = driver.findElement(By.name('InputCpf1'));
        typeDocument.click();
        typeDocument.sendKeys('68881442400');
      });

      driver.wait(until.elementLocated(By.xpath('//*[@id="newUser"]/div[5]/div[2]/div/div[2]/div')), 50000).then(function(){
        var typeSex = driver.findElement(By.xpath('//*[@id="newUser"]/div[5]/div[2]/div/div[2]/div'));
        typeSex.click();
      });

      it('Selecionar sexo', async function () {
        var typeSex = await driver.elementLocated(By.id('RadioMasculino1'));
        await driver.wait(until.findElement(typeSex),100).then ( async function(){
          for (var i = 0 ; i < 5; i++){
            var i = 1;

            return typeSex.click(i);
          }
        });
        });
      
      driver.wait(until.elementLocated(By.name('InputDataNascimento1')), 50000).then(function(){
        var bithDate = driver.findElement(By.name('InputDataNascimento1'));
        bithDate.click();
        bithDate.sendKeys('24011995');
      });

      driver.wait(until.elementLocated(By.name('InputCelular1')), 50000).then(function(){
        var telephone = driver.findElement(By.name('InputCelular1'));
        telephone.click();
        telephone.sendKeys('11987954321');
      });

      driver.wait(until.elementLocated(By.name('InputCep1')), 50000).then(function(){
        var address = driver.findElement(By.name('InputCep1'));
        address.click();
        address.sendKeys('06900000');
      });

      driver.wait(until.elementLocated(By.name('InputNumero1')), 50000).then(function(){
        var addressNumber = driver.findElement(By.name('InputNumero1'));
        addressNumber.click();
        addressNumber.sendKeys('29B');
      });

      driver.wait(until.elementLocated(By.name('InputComplemento1')), 50000).then(function(){
        var complement = driver.findElement(By.name('InputComplemento1'));
        complement.click();
        complement.sendKeys('TESTE ');
      });

      driver.wait(until.elementLocated(By.name('InputTelefone1')), 50000).then(function(){
        var phoneContect = driver.findElement(By.name('InputTelefone1'));
        phoneContect.click();
        phoneContect.sendKeys('1155273412');
      });

      driver.wait(until.elementLocated(By.name('InputPontoReferencia1')), 50000).then(function(){
        var referencePoint = driver.findElement(By.name('InputPontoReferencia1'));
        referencePoint.click();
        referencePoint.sendKeys('AO LADO DO PADARIA ESTRELA');
      });

      driver.wait(until.elementLocated(By.xpath('//*[@id="newUser"]/section/div[5]/div/div')), 50000).then(function(){
        var buttonCheckBox = driver.findElement(By.xpath('//*[@id="newUser"]/section/div[5]/div/div'))
        buttonCheckBox.click();
      });

      driver.wait(until.elementLocated(By.name('InputBairro1')), 50000).then(function(){
        var bairro = driver.findElement(By.name('InputBairro1'));
        bairro.click();
        bairro.sendKeys('Cipó Guaçu');
      });

      driver.wait(until.elementLocated(By.name('InputEndereco1')), 50000).then(function(){
        var end = driver.findElement(By.name('InputEndereco1'));
        end.click();
        end.sendKeys('Rua Professor Samuel Barnsley Pessoa');
      });

      driver.wait(until.elementLocated(By.className('col col--xs-12 col--sm-12 col--md-5 col--lg-4')), 50000).then(function(){
        var finishRegister = driver.findElement(By.className('col col--xs-12 col--sm-12 col--md-5 col--lg-4'))
        finishRegister.click();
      });
    });
});

