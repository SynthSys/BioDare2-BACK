/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ed.biodare2.backend.web.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author tzielins
 */
@ResponseStatus(code=HttpStatus.FORBIDDEN,reason="Loggin to perform the operation")
public class LogginRequiredException extends WebMappedException {

    public LogginRequiredException(String msg) {
            super(msg);
    }    
}
